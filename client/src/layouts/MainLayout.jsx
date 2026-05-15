import { Outlet } from 'react-router-dom';

/** Minimal layout wrapper for public marketing pages. */
export default function MainLayout() {
  return (
    <main className="min-h-screen bg-white">
      <Outlet />
    </main>
  );
}
