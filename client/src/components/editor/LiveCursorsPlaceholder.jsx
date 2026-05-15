import { collaborators } from '../../services/dummyData';

const cursorPositions = [
  { top: 'top-[28%] left-[35%]', color: 'bg-brand-600' },
  { top: 'top-[40%] left-[53%]', color: 'bg-violet-600' },
  { top: 'top-[52%] left-[71%]', color: 'bg-orange-600' },
];

/** Placeholder UI simulating live collaborator cursors in the editor. */
export default function LiveCursorsPlaceholder() {
  const active = collaborators.filter((c) => c.isOnline);

  return (
    <aside className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {active.map((person, index) => {
        const pos = cursorPositions[index] ?? cursorPositions[0];
        const color = pos.color;
        return (
          <span key={person.id} className={`absolute transition-all duration-500 ${pos.top} ${pos.left}`}>
            <span className={`block h-4 w-0.5 animate-pulse ${color}`} />
            <span className={`mt-0.5 inline-block rounded-md px-1.5 py-0.5 text-[10px] font-medium text-white shadow-sm ${color}`}>
              {person.name.split(' ')[0]}
            </span>
          </span>
        );
      })}
    </aside>
  );
}
