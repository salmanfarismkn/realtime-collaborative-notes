import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

/** Sidebar panel listing note collaborators and invite action. */
export default function CollaboratorsPanel({ collaborators, onInvite }) {
  return (
    <aside className="flex h-full flex-col border-l border-gray-200 bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-4 py-4">
        <h2 className="text-sm font-semibold text-gray-900">Collaborators</h2>
        <p className="mt-0.5 text-xs text-gray-500">{collaborators.length} people with access</p>
      </header>

      <ul className="flex-1 space-y-1 overflow-y-auto p-3">
        {collaborators.map((person) => (
          <li
            key={person.id}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-white"
          >
            <Avatar
              initials={person.avatarInitials}
              name={person.name}
              size="sm"
              isOnline={person.isOnline}
            />
            <section className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
              <p className="truncate text-xs text-gray-500">{person.email}</p>
            </section>
            <Badge variant={person.role === 'Editor' ? 'brand' : 'default'}>
              {person.role}
            </Badge>
          </li>
        ))}
      </ul>

      <footer className="border-t border-gray-200 bg-white p-4">
        <Button variant="secondary" className="w-full" onClick={onInvite}>
          Invite collaborator
        </Button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live sync active
        </p>
      </footer>
    </aside>
  );
}
