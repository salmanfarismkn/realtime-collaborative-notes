const sizes = {
  sm: 'h-7 w-7 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-11 w-11 text-base',
};

/** User avatar with initials fallback and optional online indicator. */
export default function Avatar({
  initials,
  name,
  size = 'md',
  isOnline,
  ringColor,
  className = '',
}) {
  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      <div
        className={`flex items-center justify-center rounded-full bg-gray-900 font-semibold text-white ${sizes[size]} ${ringColor ? `ring-2 ring-offset-1 ${ringColor}` : ''}`}
        title={name}
        aria-label={name}
      >
        {initials}
      </div>
      {isOnline !== undefined && (
        <span
          className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white ${isOnline ? 'bg-emerald-500' : 'bg-gray-300'}`}
          aria-hidden
        />
      )}
    </div>
  );
}
