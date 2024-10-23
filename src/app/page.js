"use client";

import { useState } from 'react';
import MCQForm from '../components/MCQForm';
import MCQDisplay from '../components/MCQDisplay';

export default function Home() {
  const [mcqs, setMcqs] = useState(null);

  const handleMCQGeneration = async (file) => {
    // TODO: Implement the API call to Cloudflare Workers AI
    // For now, we'll just simulate a response
    setTimeout(() => {
      setMcqs([
        { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: "Paris" },
        { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare" },
      ]);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">MCQ Generator</h1>
      {!mcqs ? (
        <MCQForm onSubmit={handleMCQGeneration} />
      ) : (
        <MCQDisplay mcqs={mcqs} />
      )}
    </div>
  );
}
