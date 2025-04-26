import React, { useState } from 'react';
import axios from 'axios';

function CoverLetter() {
  const [jobDesc, setJobDesc] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    const response = await axios.post('/api/cover-letter', { jobDesc });
    setResult(response.data.result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Cover Letter Generator</h2>
      <textarea className="w-full border p-2 mb-4" rows="4" placeholder="Paste job description" value={jobDesc} onChange={e => setJobDesc(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleGenerate}>Generate Cover Letter</button>
      <div className="mt-4 p-4 bg-gray-100 whitespace-pre-wrap">{result}</div>
    </div>
  );
}

export default CoverLetter;
