import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import BuildResume from './BuildResume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/build-resume" element={<BuildResume />} />
      </Routes>
    </Router>
  );
}

export default App;
