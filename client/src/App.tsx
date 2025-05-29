import { Route, Switch, useLocation } from 'wouter';
import PageTransition from '@/components/layout/PageTransition';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import BookingPage from '@/pages/Booking';
import OlaFleetACRepair from '@/pages/case-studies/ola-fleet-ac-repair';
import VintageAmbassador from '@/pages/case-studies/vintage-ambassador';
import MobileCtaBar from '@/components/MobileCtaBar';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TourBusCaseStudy from '@/pages/case-studies/tour-bus';
import SymptomsPage from '@/pages/Symptoms';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import ServicesPage from '@/pages/Services';
import CaseStudiesPage from '@/pages/CaseStudies';
import FAQPage from '@/pages/faq';

// Create a client
const queryClient = new QueryClient();

export default function App() {
  const [location] = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="relative pt-24">
          <PageTransition location={location}>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/booking" component={BookingPage} />
              <Route path="/symptoms" component={SymptomsPage} />
              <Route path="/services" component={ServicesPage} />
              <Route path="/case-studies" component={CaseStudiesPage} />
              <Route path="/faq" component={FAQPage} />
              <Route path="/case-studies/ola-fleet-ac-repair" component={OlaFleetACRepair} />
              <Route path="/case-studies/vintage-ambassador" component={VintageAmbassador} />
              <Route path="/case-studies/tour-bus" component={TourBusCaseStudy} />
              <Route path="/:rest*">
                <div className="min-h-[50vh] flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                    <p className="text-lg text-gray-300 mb-8">
                      The page you're looking for doesn't exist.
                    </p>
                    <a href="/" className="text-primary hover:underline">
                      Return to Home
                    </a>
                  </div>
                </div>
              </Route>
            </Switch>
          </PageTransition>
        </main>
        <Footer />
        <MobileCtaBar />
        <ScrollToTop />
        <Toaster position="top-right" />
      </div>
    </QueryClientProvider>
  );
}
