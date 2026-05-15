import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

/** Site footer with navigation links and copyright. */
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Logo />
          <nav className="flex flex-wrap gap-6 text-sm text-gray-600">
            <a href="#features" className="transition-colors hover:text-gray-900">
              Features
            </a>
            <a href="#collaboration" className="transition-colors hover:text-gray-900">
              Collaboration
            </a>
            <Link to="/login" className="transition-colors hover:text-gray-900">
              Log in
            </Link>
            <Link to="/signup" className="transition-colors hover:text-gray-900">
              Sign up
            </Link>
          </nav>
        </section>
        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} CollabNotes. Built for modern teams.
        </p>
      </article>
    </footer>
  );
}
