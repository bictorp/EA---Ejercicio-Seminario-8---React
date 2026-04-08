# React User and Organization Management Application
Se ha implementado IA (Gemini AI) para la corrección de código y tener una correcta comprensión del mismo.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern React TypeScript application built with Vite for managing users and organizations. This project provides full CRUD (Create, Read, Update, Delete) operations for both entities, featuring a clean separation of concerns with custom hooks, services, and reusable components.

## Project Structure

The project follows a modular structure to ensure scalability and maintainability:

```
src/
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
├── components/
│   ├── Button/                # Reusable Button component
│   │   ├── button.module.css  # Button-specific styles
│   │   └── Button.tsx         # Button component implementation
│   ├── users/                 # User-related components
│   │   ├── UserList.tsx       # Displays list of users
│   │   ├── UserForm.tsx       # Form for creating/editing users
│   │   └── UserManagement.tsx # Main user management component
│   └── organizations/         # Organization-related components
│       ├── OrganizationList.tsx       # Displays list of organizations
│       ├── OrganizationForm.tsx       # Form for creating/editing organizations
│       └── OrganizationManagement.tsx # Main organization management component
├── services/                  # API interaction layer
│   ├── api-client.ts          # Axios client configuration
│   ├── http-service.ts        # Generic HTTP service utilities
│   ├── user-service.ts        # User-specific API calls
│   └── organization-service.ts # Organization-specific API calls
├── models/                    # TypeScript type definitions
│   ├── User.ts                # User model and types
│   └── Organization.ts        # Organization model and types
└── hooks/                     # Custom React hooks
    ├── useUser.ts             # Hook for user-related logic
    └── useOrganization.ts     # Hook for organization-related logic
```

### Folder Explanations

- **components/**: Contains reusable UI components. Subfolders organize components by feature (users, organizations) and include shared components like Button.
- **services/**: Handles all API interactions. Separates generic HTTP utilities from specific service logic for users and organizations.
- **models/**: Defines TypeScript interfaces and types for data models, ensuring type safety across the application.
- **hooks/**: Custom hooks that encapsulate state management and business logic, promoting component reusability and separation of concerns.

## Features / Functionalities

- **User Management**: Full CRUD operations for users, including listing, creating, updating, and deleting users.
- **Organization Management**: Full CRUD operations for organizations, with similar functionality to user management.
- **Form Handling**: Dedicated forms for user and organization creation/editing, using React Hook Form with Zod validation.
- **Data Display**: Lists for displaying users and organizations with responsive design using Bootstrap.
- **API Integration**: Axios-based services for seamless backend communication.
- **State Management**: Custom hooks manage application state and logic, keeping components focused on rendering.
- **Responsive UI**: Bootstrap-styled components for a professional and mobile-friendly interface.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manelcolominas/EA-React.git
   cd EA-React
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with hot reload:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Building for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Folder and File Conventions

- **Separation of Concerns**: Hooks handle logic and state, services manage API calls, models define data structures, and components focus on UI rendering. This separation makes the codebase easier to maintain and test.
- **Naming Conventions**:
  - Components: PascalCase (e.g., `UserForm.tsx`)
  - Hooks: camelCase prefixed with `use` (e.g., `useUser.ts`)
  - Services: kebab-case with descriptive names (e.g., `user-service.ts`)
  - Models: PascalCase matching the entity (e.g., `User.ts`)

## Best Practices

- **API Calls**: All backend interactions are routed through dedicated services to centralize error handling and configuration.
- **Logic Encapsulation**: Custom hooks encapsulate complex logic, allowing components to remain pure and focused on presentation.
- **Scalability**: The modular structure supports easy addition of new features or entities.
- **Type Safety**: Full TypeScript implementation ensures compile-time type checking.
- **Code Quality**: Use ESLint and Prettier for consistent code formatting and linting (configure as needed).
- **Validation**: Forms use Zod schemas for robust input validation.

## Example Usage

### Using a Custom Hook

```typescript
import { useUser } from '../hooks/useUser';

function UserComponent() {
  const { users, loading, error, createUser, updateUser, deleteUser } = useUser();

  // Component logic here
}
```

### API Service Example

```typescript
import { userService } from '../services/user-service';

const users = await userService.getAll();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

For questions or support, please open an issue in the repository.
