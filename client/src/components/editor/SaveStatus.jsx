/** Displays autosave state in the note editor toolbar. */
export default function SaveStatus({ status }) {
  const config = {
    saved: { label: 'Saved', dot: 'bg-emerald-500', text: 'text-gray-500' },
    saving: { label: 'Saving…', dot: 'bg-amber-400 animate-pulse', text: 'text-gray-500' },
    unsaved: { label: 'Unsaved changes', dot: 'bg-gray-400', text: 'text-gray-500' },
    error: { label: 'Save failed', dot: 'bg-red-500', text: 'text-red-600' },
  };

  const { label, dot, text } = config[status] ?? config.unsaved;

  return (
    <span className={`flex items-center gap-2 text-xs font-medium ${text}`}>
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden />
      {label}
    </span>
  );
}
