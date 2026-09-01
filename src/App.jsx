import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/layout/PageWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HighwayDPR from './pages/services/HighwayDPR';
import SurveyGeomatics from './pages/services/SurveyGeomatics';
import HydraulicStructures from './pages/services/HydraulicStructures';
import PMC from './pages/services/PMC';
import TPI from './pages/services/TPI';
import TrafficPavement from './pages/services/TrafficPavement';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/"                                  element={<Home />} />
          <Route path="/about"                             element={<About />} />
          <Route path="/services"                          element={<Services />} />
          <Route path="/services/highway-dpr"             element={<HighwayDPR />} />
          <Route path="/services/survey-geomatics"        element={<SurveyGeomatics />} />
          <Route path="/services/hydraulic-structures"    element={<HydraulicStructures />} />
          <Route path="/services/pmc"                     element={<PMC />} />
          <Route path="/services/tpi"                     element={<TPI />} />
          <Route path="/services/traffic-pavement-structural" element={<TrafficPavement />} />
          <Route path="/contact"                          element={<Contact />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-fog-white text-center px-4">
              <span className="label text-highway-orange block mb-3">404</span>
              <h1 className="font-heading font-bold text-asphalt text-4xl mb-4">Page not found</h1>
              <p className="text-concrete-grey mb-8">The page you're looking for doesn't exist.</p>
              <a href="/" className="inline-flex items-center gap-2 bg-highway-orange text-white font-heading font-semibold px-6 py-3 rounded-lg hover:bg-signal-red transition-all duration-150">
                Go to Home
              </a>
            </div>
          } />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}
