import { Link } from 'react-router-dom';
import SaveStatus from './SaveStatus';
import Avatar from '../ui/Avatar';

const tools = [
  { label: 'Bold', icon: 'B', className: 'font-bold' },
  { label: 'Italic', icon: 'I', className: 'italic' },
  { label: 'Underline', icon: 'U', className: 'underline' },
  { label: 'List', icon: '≡' },
  { label: 'Link', icon: '🔗' },
];

/** Formatting toolbar for the rich text editor (UI placeholder). */
export default function EditorToolbar({ saveStatus, collaborators }) {
  return (
    <header className="flex flex-wrap items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 sm:px-6">
      <Link
        to="/dashboard"
        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        aria-label="Back to dashboard"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      <nav className="flex items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 p-0.5">
        {tools.map((tool) => (
          <button
            key={tool.label}
            type="button"
            title={tool.label}
            className={`flex h-8 w-8 items-center justify-center rounded-md text-sm text-gray-600 transition-colors hover:bg-white hover:text-gray-900 hover:shadow-sm ${tool.className ?? ''}`}
          >
            {tool.icon}
          </button>
        ))}
      </nav>

      <span className="hidden h-6 w-px bg-gray-200 sm:block" />

      <SaveStatus status={saveStatus} />

      <section className="ml-auto flex items-center gap-3">
        <span className="hidden items-center gap-1.5 text-xs text-emerald-600 sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          {collaborators.filter((c) => c.isOnline).length} online
        </span>
        <span className="flex -space-x-2">
          {collaborators.slice(0, 3).map((person) => (
            <Avatar
              key={person.id}
              initials={person.avatarInitials}
              name={person.name}
              size="sm"
              isOnline={person.isOnline}
            />
          ))}
        </span>
      </section>
    </header>
  );
}
