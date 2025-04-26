import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#0070f3', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>AI Resume Pro</h1>
        <p style={{ fontSize: '20px', marginBottom: '30px' }}>Build smart, optimized resumes in seconds using AI!</p>
        <Link to="/build-resume">
          <button 
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              backgroundColor: 'white',
              color: '#0070f3',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>Features</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
          <div>
            <h3>AI-Powered Resume Writing</h3>
            <p>Instantly generate resumes tailored to the job you're applying for.</p>
          </div>
          <div>
            <h3>Smart Cover Letters</h3>
            <p>Get personalized, professional cover letters created by AI.</p>
          </div>
          <div>
            <h3>Job Application Tracker</h3>
            <p>Stay organized and track your applications in one place.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#f7f7f7', padding: '30px', textAlign: 'center', fontSize: '14px', color: '#555' }}>
        © 2025 AI Resume Pro. All rights reserved.
      </div>
    </div>
  );
}

export default HomePage;
