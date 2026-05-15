import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../ui/Avatar';
import { useAuth } from '../../context/AuthContext';
import { useClickOutside } from '../../hooks/useClickOutside';

/** Profile dropdown in the dashboard header. */
export default function UserMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useClickOutside(ref, () => setOpen(false));

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <section ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Avatar initials={user.avatarInitials} name={user.name} size="sm" />
        <span className="hidden text-sm font-medium text-gray-700 sm:block">{user.name}</span>
        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <menu className="absolute right-0 z-50 mt-2 w-56 origin-top-right list-none rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg">
          <li className="border-b border-gray-100 px-3 py-2.5">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
            <p className="mt-1 text-xs font-medium text-brand-600">{user.plan} plan</p>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
            >
              Sign out
            </button>
          </li>
        </menu>
      )}
    </section>
  );
}
