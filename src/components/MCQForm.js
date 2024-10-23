import { useState } from 'react';

export default function MCQForm({ onSubmit }) {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    await onSubmit(file);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-2">
          Upload Document
        </label>
        <input
          type="file"
          id="document"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          accept=".txt,.pdf,.doc,.docx"
        />
      </div>
      <button
        type="submit"
        disabled={!file || isLoading}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300"
      >
        {isLoading ? 'Generating MCQs...' : 'Generate MCQs'}
      </button>
    </form>
  );
}