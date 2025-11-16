import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import WorkDetail from './pages/WorkDetail';
import GraphicDesign from './pages/projects/GraphicDesign';
import ScrollToTopButton from './components/ScrollToTopButton';
import './styles/global.css';
import './styles/components.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<WorkDetail />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
        </Routes>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
