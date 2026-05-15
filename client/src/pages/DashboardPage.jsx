import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import NoteCard from '../components/dashboard/NoteCard';
import Button from '../components/ui/Button';
import { useNotes } from '../context/NotesContext';
import { useAuth } from '../context/AuthContext';
import { useDebounce } from '../hooks/useDebounce';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/** Main workspace view with recent and shared notes. */
export default function DashboardPage() {
  useDocumentTitle('Dashboard');
  const { user } = useAuth();
  const { recentNotes, sharedNotes, loading } = useNotes();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  const filterNotes = (notes) => {
    if (!debouncedSearch.trim()) return notes;
    const q = debouncedSearch.toLowerCase();
    return notes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.excerpt.toLowerCase().includes(q),
    );
  };

  const filteredRecent = useMemo(() => filterNotes(recentNotes), [recentNotes, debouncedSearch]);
  const filteredShared = useMemo(() => filterNotes(sharedNotes), [sharedNotes, debouncedSearch]);

  return (
    <section className="flex flex-1 flex-col overflow-hidden">
      <DashboardHeader search={search} onSearchChange={setSearch} />

      <section className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Good {getGreeting()}, {user?.name?.split(' ')[0] ?? 'there'}
            </h2>
            <p className="text-sm text-gray-500">
              {recentNotes.length} notes in your workspace
            </p>
          </section>
          <Button to="/notes/note-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Create note
          </Button>
        </header>

        {loading ? (
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="h-40 animate-pulse rounded-xl border border-gray-200 bg-gray-100"
              />
            ))}
          </section>
        ) : (
          <>
            <section className="mb-10">
              <header className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Recent notes
                </h3>
                <Link to="/notes/note-1" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                  View all
                </Link>
              </header>
              {filteredRecent.length > 0 ? (
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredRecent.map((note) => (
                    <NoteCard key={note.id} note={note} />
                  ))}
                </section>
              ) : (
                <EmptyState message="No recent notes match your search." />
              )}
            </section>

            <section>
              <header className="mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Shared with you
                </h3>
              </header>
              {filteredShared.length > 0 ? (
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredShared.map((note) => (
                    <NoteCard key={note.id} note={note} showOwner />
                  ))}
                </section>
              ) : (
                <EmptyState message="No shared notes match your search." />
              )}
            </section>
          </>
        )}
      </section>
    </section>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
}

function EmptyState({ message }) {
  return (
    <article className="rounded-xl border border-dashed border-gray-200 bg-white px-6 py-12 text-center">
      <p className="text-sm text-gray-500">{message}</p>
    </article>
  );
}
