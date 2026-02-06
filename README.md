# Dashboard App

A modern dashboard application built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Clean Architecture**: Separation of visual (UI) and logical (container) components
- **Type-Safe**: Full TypeScript support
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern Stack**: Next.js 15+ with App Router

## Project Structure

```
├── app/                    # Next.js app router pages
├── components/
│   ├── ui/                # Presentational components (pure visual)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── StatCard.tsx
│   └── containers/        # Container components (logic/data)
│       ├── DashboardLayout.tsx
│       └── StatsContainer.tsx
├── lib/                   # Utility functions and data fetching
│   └── data.ts
├── types/                 # TypeScript type definitions
│   └── index.ts
└── public/               # Static assets
```

## Architecture

### UI Components (`components/ui/`)
Purely presentational components that receive props and render UI. No business logic or data fetching.

- `Button` - Styled button with variants
- `Card` - Card container with header support
- `StatCard` - Statistics display card
- `Sidebar` - Navigation sidebar
- `Header` - Top header with user info

### Container Components (`components/containers/`)
Components that handle data fetching, state management, and business logic.

- `DashboardLayout` - Main layout with navigation and routing
- `StatsContainer` - Fetches and displays dashboard statistics

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Development

- UI components should remain pure and only depend on props
- Container components handle all side effects and data fetching
- Use the `lib/data.ts` file for API calls (currently using mock data)
