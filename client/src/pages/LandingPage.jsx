import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import FeatureSection from '../components/landing/FeatureSection';
import CollaborationSection from '../components/landing/CollaborationSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/** Public marketing landing page. */
export default function LandingPage() {
  useDocumentTitle(null);

  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <CollaborationSection />
      <CTASection />
      <Footer />
    </>
  );
}
