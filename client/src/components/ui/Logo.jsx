import { Link } from 'react-router-dom';

/** Application brand mark used in navbar and sidebar. */
export default function Logo({ to = '/', className = '' }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm shadow-brand-600/25 transition-transform duration-200 group-hover:scale-105">
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <path d="M2 3h12v1.5H2V3zm0 3.5h9v1.5H2V6.5zm0 3.5h11v1.5H2V10z" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-gray-900">
        Collab<span className="text-brand-600">Notes</span>
      </span>
    </Link>
  );
}
