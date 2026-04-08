//leerá los datos del servicio y los pintará bonitos.
import { useEffect, useState } from 'react';
import activityService, { Activity } from '../../services/activity-service';

const ActivityHistory = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Cuando el componente carga, pedimos las actividades al servicio
    setActivities(activityService.getActivities());
  }, []);

  return (
    <div className="mt-4">
      <h2>Historial de Activitats</h2>
      {activities.length === 0 ? (
        <p className="text-muted">Encara no hi ha cap activitat registrada.</p>
      ) : (
        <ul className="list-group">
          {activities.map((act) => (
            <li key={act.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{act.action}</strong>
                <p className="mb-0 text-muted">{act.details}</p>
              </div>
              <span className="badge bg-secondary rounded-pill">
                {new Date(act.timestamp).toLocaleTimeString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityHistory;