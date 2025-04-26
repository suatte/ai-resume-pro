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
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());  // Middleware to parse JSON requests

// Simulate AI-generated resume suggestions
app.post('/generate_resume', (req, res) => {
  const { section, content } = req.body;  // Extract section and content from the request

  // Simulated AI suggestions (You can replace this with OpenAI later)
  const simulatedSuggestions = `Improved version of your ${section}: "${content}" could be written as: "Contributed to XYZ project by developing core functionalities..."`;

  res.json({ suggestions: simulatedSuggestions });  // Send the suggestions back to the frontend
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
