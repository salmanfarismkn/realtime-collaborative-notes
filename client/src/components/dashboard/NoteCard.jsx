import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { formatRelativeDate } from '../../utils/formatDate';

/** Card displaying a note preview in dashboard grids. */
export default function NoteCard({ note, showOwner = false }) {
  return (
    <Card
      as={Link}
      to={`/notes/${note.id}`}
      className="flex h-full flex-col no-underline hover:no-underline"
    >
      <header className="flex items-start justify-between gap-2">
        <h3 className="line-clamp-1 text-base font-semibold text-gray-900 transition-colors group-hover:text-brand-600">
          {note.title}
        </h3>
        {note.isShared !== undefined && note.isShared && (
          <Badge variant="brand">Shared</Badge>
        )}
        {showOwner && note.owner && <Badge>{note.owner}</Badge>}
      </header>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600">
        {note.excerpt}
      </p>
      <footer className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
        <span>{formatRelativeDate(note.updatedAt)}</span>
        {note.collaboratorCount > 1 && (
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87" />
            </svg>
            {note.collaboratorCount}
          </span>
        )}
      </footer>
    </Card>
  );
}
