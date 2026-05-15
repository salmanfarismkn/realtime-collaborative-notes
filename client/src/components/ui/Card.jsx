/** Base card container with hover elevation for note grids. */
export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
