import { useState } from 'react';
import { useOrganization } from '../../hooks/useOrganization';
import { Organization } from '../../models/Organization';
import OrganizationList from './OrganizationList';
import OrganizationForm, { OrganizationFormData } from './OrganizationForm';
import Button from '../Button/Button';

/**
 * OrganizationManagement component - Main container for organizations CRUD operations
 * Uses the useOrganization hook for all business logic
 * Handles state for form visibility and editing
 */
const OrganizationManagement = () => {
  const { organizations, loading, error, createOrganization, updateOrganization, deleteOrganization } = useOrganization();
  const [editingOrg, setEditingOrg] = useState<Organization | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSave = async (data: OrganizationFormData) => {
    try {
      if (editingOrg) {
        // Update existing organization
        const updatedOrg = { ...editingOrg, ...data } as Organization;
        await updateOrganization(updatedOrg);
      } else {
        // Create new organization
        await createOrganization(data as Omit<Organization, '_id'>);
      }
      setShowForm(false);
      setEditingOrg(null);
    } catch {
      // Error is already handled by the hook
    }
  };

  const handleEdit = (org: Organization) => {
    setEditingOrg(org);
    setShowForm(true);
  };

  const handleDelete = async (org: Organization) => {
    try {
      await deleteOrganization(org._id);
    } catch {
      // Error is already handled by the hook
    }
  };

  const handleAddClick = () => {
    setEditingOrg(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingOrg(null);
  };

  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="mb-4">Organizations</h2>
      {error && <p className="text-danger">{error}</p>}
      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mb-3">
        {!showForm && (
          <Button color="primary" onClick={handleAddClick}>
            Add Organization
          </Button>
        )}
        <div className="flex-grow-1 ms-3" style={{ maxWidth: '300px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {showForm && (
        <OrganizationForm
          onSubmit={handleSave}
          initialData={editingOrg || undefined}
          onCancel={handleCancel}
        />
      )}

      <OrganizationList
        organizations={filteredOrganizations}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};


export default OrganizationManagement;
