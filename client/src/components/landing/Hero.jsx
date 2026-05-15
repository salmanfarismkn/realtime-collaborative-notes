import Button from '../ui/Button';

/** Landing page hero with headline, subcopy, and primary CTAs. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-50 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-gray-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Real-time collaboration, built for teams
          </p>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Notes that move as fast as your team
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
            Write, plan, and ship together. CollabNotes brings live editing, presence,
            and beautiful workspaces into one focused product.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" to="/signup">
              Start collaborating free
            </Button>
            <Button size="lg" variant="secondary" to="/login">
              View demo dashboard
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            No credit card required · Free for teams up to 5
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/10">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-4 text-xs text-gray-400">Product roadmap Q2 — CollabNotes</span>
            </div>
            <div className="grid gap-0 md:grid-cols-5">
              <div className="border-r border-gray-100 bg-gray-50 p-4 md:col-span-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Workspace</p>
                <ul className="mt-3 space-y-2">
                  {['Roadmap', 'Design', 'Standups'].map((item) => (
                    <li
                      key={item}
                      className={`rounded-md px-2 py-1.5 text-xs ${item === 'Roadmap' ? 'bg-white font-medium text-gray-900 shadow-sm' : 'text-gray-500'}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 md:col-span-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">Q2 launch priorities</h3>
                  <div className="flex -space-x-2">
                    {['JL', 'SP', 'TK'].map((initials) => (
                      <span
                        key={initials}
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-[10px] font-semibold text-white"
                      >
                        {initials}
                      </span>
                    ))}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-brand-600 text-[10px] font-semibold text-white">
                      +2
                    </span>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-3/4 rounded bg-gray-200" />
                  <div className="h-2 w-full rounded bg-gray-100" />
                  <div className="h-2 w-5/6 rounded bg-gray-100" />
                </div>
                <div className="mt-6 flex items-center gap-2 rounded-lg border border-brand-100 bg-brand-50 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <p className="text-xs text-brand-700">
                    <strong>Jordan</strong> is editing · Live sync active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
