import React, { useState } from 'react';
import axios from 'axios';

function ResumeRewrite() {
  const [resume, setResume] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [result, setResult] = useState('');

  const handleRewrite = async () => {
    const response = await axios.post('/api/rewrite', { resume, jobDesc });
    setResult(response.data.result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Resume Rewrite</h2>
      <textarea className="w-full border p-2 mb-4" rows="6" placeholder="Paste your resume" value={resume} onChange={e => setResume(e.target.value)} />
      <textarea className="w-full border p-2 mb-4" rows="4" placeholder="Paste job description" value={jobDesc} onChange={e => setJobDesc(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRewrite}>Rewrite with AI</button>
      <div className="mt-4 p-4 bg-gray-100 whitespace-pre-wrap">{result}</div>
    </div>
  );
}

export default ResumeRewrite;
