import { Link, Outlet } from 'react-router-dom';
import Logo from '../components/ui/Logo';

/** Centered card layout for login and signup flows. */
export default function AuthLayout() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <header className="px-6 py-6">
        <Logo />
      </header>
      <section className="flex flex-1 flex-col items-center justify-center px-4 pb-16">
        <article className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <Outlet />
        </article>
        <p className="mt-6 text-center text-sm text-gray-500">
          <Link to="/" className="font-medium text-brand-600 transition-colors hover:text-brand-700">
            ← Back to home
          </Link>
        </p>
      </section>
    </main>
  );
}
