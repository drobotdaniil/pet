# Pet — Custom Web Application

## Overview
This project is a modern web application built with Next.js and TypeScript, featuring custom authentication, theming, and a component-based architecture. It uses SQLite for data storage and follows best practices for scalable React development.

## Technologies Used
- Next.js (React framework)
- TypeScript
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
- `src/app`: Main application code
	- `(auth)`: Authentication logic and views
	- `components`: Reusable UI components
	- `api`: API routes (Next.js)
	- `blogs`, `profile`: Feature pages
- `public`: Static assets
- `better-auth_migrations`: Database migrations
- `sqlite.db`: SQLite database

## Features
- User authentication (sign-in, sign-up, logout)
- Blog and profile pages
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
