import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Blog from './Blog.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import BriefDiv from './BriefDiv.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/BriefDiv" element={<BriefDiv />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
