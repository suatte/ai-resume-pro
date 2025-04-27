import React, { useState } from 'react';

function BuildResume() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [resume, setResume] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generateResume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, skills, experience })
      });

      const data = await response.json();
      setResume(data.resume);
    } catch (error) {
      console.error('Error generating resume:', error);
      setResume('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Start Building Your Resume</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
        <input 
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <input 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <textarea 
          placeholder="Enter your skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          rows="4"
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <textarea 
          placeholder="Enter your experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          rows="4"
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button 
          onClick={handleGenerate}
          style={{
            padding: '15px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
        >
          {loading ? 'Generating...' : 'Generate Resume'}
        </button>
      </div>

      {resume && (
        <div style={{ marginTop: '40px', backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px' }}>
          <h2>Generated Resume:</h2>
          <pre>{resume}</pre>
        </div>
      )}
    </div>
  );
}

export default BuildResume;
          
            
