import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">AI Resume Pro</h1>
      <p className="mt-4 text-lg">Upgrade your resume and cover letters with the power of AI.</p>
      <Link to="/resume">
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Try Resume Rewrite</button>
      </Link>
    </div>
  );
}

export default Home;
