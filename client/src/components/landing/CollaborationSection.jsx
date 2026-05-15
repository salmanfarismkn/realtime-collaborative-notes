import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import { collaborators } from '../../services/dummyData';

/** Collaboration-focused section with live editing preview mockup. */
export default function CollaborationSection() {
  return (
    <section id="collaboration" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Built for teams
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              See your team think in real time
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Watch edits appear instantly, follow live cursors, and know who is in the
              document — without refreshing or losing context.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Colored cursors show exactly where teammates are editing',
                'Presence indicators update the moment someone joins or leaves',
                'Conflict-free sync keeps every change in order',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 12 12" aria-hidden>
                      <path d="M10.28 2.28a.75.75 0 00-1.06-1.06L4.5 5.94 2.78 4.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l5.25-5.25z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-8" to="/signup">
              Try live collaboration
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-900/5">
              <header className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Live session</p>
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  3 editing now
                </span>
              </header>

              <div className="space-y-3 rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-800">
                  <span className="rounded bg-blue-100 px-0.5 text-blue-800">Launch</span>
                  {' '}
                  priorities for Q2 include real-time sync and workspace permissions.
                </p>
                <p className="text-sm text-gray-500">
                  <span className="inline-block rounded-sm bg-brand-100/50 px-1 text-brand-600">
                    |
                  </span>
                  <span className="ml-1 text-xs text-brand-600">Jordan is typing…</span>
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex -space-x-2">
                  {collaborators.slice(0, 4).map((person) => (
                    <Avatar
                      key={person.id}
                      initials={person.avatarInitials}
                      name={person.name}
                      size="sm"
                      isOnline={person.isOnline}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500">Changes sync in under 50ms</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-brand-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
