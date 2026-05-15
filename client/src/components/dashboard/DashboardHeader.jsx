import SearchInput from '../ui/SearchInput';
import UserMenu from './UserMenu';

/** Top bar for the dashboard with search and profile menu. */
export default function DashboardHeader({ search, onSearchChange }) {
  return (
    <header className="flex flex-col gap-4 border-b border-gray-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <section>
        <h1 className="text-xl font-semibold text-gray-900">Your workspace</h1>
        <p className="mt-0.5 text-sm text-gray-500">Pick up where you left off</p>
      </section>
      <section className="flex items-center gap-3 sm:max-w-md sm:flex-1 sm:justify-end">
        <SearchInput
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full sm:max-w-xs lg:max-w-sm"
        />
        <UserMenu />
      </section>
    </header>
  );
}
