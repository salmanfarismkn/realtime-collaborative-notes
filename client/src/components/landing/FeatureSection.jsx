import FeatureIcon from './FeatureIcon';
import { landingFeatures } from '../../services/dummyData';

/** Grid of product capabilities for the marketing landing page. */
export default function FeatureSection() {
  return (
    <section id="features" className="border-t border-gray-100 bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything your team needs to stay aligned
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Purpose-built for fast-moving teams who live in docs, not spreadsheets.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {landingFeatures.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
