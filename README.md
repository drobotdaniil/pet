# Pet — Custom Web Application

## Overview
This project is a modern web application built with Next.js and TypeScript, featuring custom authentication, theming, internationalization and a component-based architecture. It uses SQLite for data storage and follows best practices for scalable React development.

## Technologies Used
- Next.js (React framework)
- TypeScript
- next-intl
- ESLint
- SQLite
- Modern React (hooks, functional components)
- Custom authentication
- Component-based architecture
- Theming support
- File-based routing

## Main Commands
```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Lint code
```

## Project Structure
- `src/app/[locale]`: Main application code
	- `(auth)`: Authentication logic and views
	- `components`: Reusable UI components
	- `api`: API routes (Next.js)
	- `blogs`, `profile`: Feature pages
- `src/i18n`: Internationalization config
- `src/middleware.ts` - to handle internationalization
- `public`: Static assets
- `better-auth_migrations`: Database migrations

## Features
- User authentication (sign-in, sign-up, logout)
- Blog and profile pages
- Locale switcher
- Themed UI
- Navigation and layout components

## Getting Started
1. Clone the repository.
2. Install dependencies.
3. Run the development server.
4. Access the app at `http://localhost:3000`.

## Environment Variables
To enable authentication with GitHub and Google, you must set the following environment variables in a `.env.local` file at the project root:

```env
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

You can obtain these credentials by registering your application with GitHub and Google.

## Authentication & Migrations

This project uses **better-auth** for authentication, supporting email/password and social logins (GitHub, Google). The configuration is located in `src/app/(auth)/auth.ts`.

- **better-auth** handles user sessions, credential validation, and integration with social providers.
- The SQLite database (`sqlite.db`) stores user and session data.
- Database migrations for authentication are managed in the `better-auth_migrations` folder.

Refer to the [better-auth documentation](https://www.npmjs.com/package/better-auth) for advanced configuration and usage details.


## Creating the SQLite Database

Before running the application for the first time, create the `sqlite.db` database file and apply migrations using [@better-auth/cli](https://www.npmjs.com/package/@better-auth/cli) and your config:

1. Install the CLI (once):
	```bash
	npm install --save-dev @better-auth/cli
	```
2. Generate migrations (if needed):
	```bash
	npx @better-auth/cli generate --config ./src/app/\[locale\]/\(auth\)/auth.ts
	```
3. Apply migrations:
	```bash
	npx @better-auth/cli migrate --config ./src/app/\[locale\]/\(auth\)/auth.ts
	```
4. After this, the `sqlite.db` file will be created with the required structure.

