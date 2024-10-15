import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/pages/Home';
import Error404 from './containers/errors/Error404';
import Cases from './containers/pages/Cases';
import Services from './containers/pages/Services';
import About_Us from './containers/pages/About_Us';
import Careers from './containers/pages/Careers';
import Blog from './containers/pages/Blog';
import Contact from './containers/pages/Contact';

import { AnimatePresence } from "framer-motion";
function RoutesAnimated() {

    const location = useLocation();
    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        { /*Error Display */ }
        <Route path="*" element={<Error404 />} />

        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About_Us />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      </AnimatePresence>
        
    )
}

export default RoutesAnimated;