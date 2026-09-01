import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PAGE_META = {
  '/': {
    title: 'One Trust Services - Engineering Trust. Delivering Infrastructure.',
    description: 'A highway and infrastructure engineering consultancy providing DPR preparation, survey, design, and project management services across Gujarat.',
  },
  '/about': {
    title: 'About Us | One Trust Services',
    description: 'Learn about One Trust Services, a Palanpur-based engineering consultancy led by Ronak M. Chaudhary, specialising in highway, survey, design, and PMC services.',
  },
  '/services': {
    title: 'Services | One Trust Services',
    description: 'End-to-end engineering consultancy services - DPR preparation, survey & geomatics, hydraulic structures, PMC, TPI, and traffic & pavement assessment.',
  },
  '/services/highway-dpr': {
    title: 'Highway DPR Preparation | One Trust Services',
    description: 'Detailed Project Report preparation for highway and road projects - condition assessment, alignment studies, engineering estimates, and BOQ/tender documentation.',
  },
  '/services/survey-geomatics': {
    title: 'Survey & Geomatics | One Trust Services',
    description: 'LiDAR, DGPS, topographical and utility surveys with GIS-based mapping and digital terrain modelling for infrastructure projects.',
  },
  '/services/hydraulic-structures': {
    title: 'Hydraulic Structures Design | One Trust Services',
    description: 'Engineering design of culverts, causeways, minor bridges, and drainage structures backed by hydraulic and hydrological studies.',
  },
  '/services/pmc': {
    title: 'PMC – Project Management Consultancy | One Trust Services',
    description: 'On-ground construction supervision, quality monitoring, and project reporting for roads and infrastructure projects.',
  },
  '/services/tpi': {
    title: 'TPI – Third Party Inspection | One Trust Services',
    description: 'Independent, unbiased inspection of materials, workmanship, and site execution for infrastructure works.',
  },
  '/services/traffic-pavement-structural': {
    title: 'Traffic, Pavement & Structural Assessment | One Trust Services',
    description: 'Traffic studies, flexible pavement design, and structural health assessment - integrated analysis for roads and bridges.',
  },
  '/contact': {
    title: 'Sectors We Serve & Contact | One Trust Services',
    description: 'One Trust Services works with R&B, Irrigation, Municipalities, and Panchayat departments. Contact us to discuss your project.',
  },
};

export default function PageWrapper({ children }) {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] || PAGE_META['/'];

  useEffect(() => {
    document.title = meta.title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = meta.description;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, meta]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Header />
      <main id="main-content" className="flex-1" tabIndex="-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
