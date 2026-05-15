import Button from '../ui/Button';

/** Bottom call-to-action band on the landing page. */
export default function CTASection() {
  return (
    <section id="pricing" className="bg-gray-900 py-20">
      <article className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to write together?
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Join thousands of teams shipping faster with CollabNotes. Start free, upgrade when
          you scale.
        </p>
        <section className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" to="/signup" className="!bg-white !text-gray-900 hover:!bg-gray-100">
            Get started — it&apos;s free
          </Button>
          <Button
            size="lg"
            variant="secondary"
            to="/login"
            className="!border-gray-700 !bg-transparent !text-white hover:!bg-gray-800"
          >
            Sign in to workspace
          </Button>
        </section>
      </article>
    </section>
  );
}
