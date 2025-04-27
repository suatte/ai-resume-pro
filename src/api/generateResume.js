import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, skills, experience } = await req.json();

  const prompt = `
  Create a professional resume for the following details:

  Name: ${name}
  Skills: ${skills}
  Experience: ${experience}

  The resume should sound professional, clean, and job-ready.
  `;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR-API-KEY-HERE`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    })
  });

  const data = await response.json();
  const aiResume = data.choices[0].message.content;

  return NextResponse.json({ resume: aiResume });
}
