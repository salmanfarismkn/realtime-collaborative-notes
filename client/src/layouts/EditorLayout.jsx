import { Outlet } from 'react-router-dom';

/** Full-height layout for the note editor experience. */
export default function EditorLayout() {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-white">
      <Outlet />
    </main>
  );
}
