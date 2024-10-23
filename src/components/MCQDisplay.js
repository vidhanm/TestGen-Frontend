export default function MCQDisplay({ mcqs }) {
    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Generated MCQs</h2>
        {mcqs.map((mcq, index) => (
          <div key={index} className="mb-6 p-4 border border-gray-200 rounded-md">
            <p className="font-semibold mb-2">{index + 1}. {mcq.question}</p>
            <ul className="list-disc pl-6">
              {mcq.options.map((option, optionIndex) => (
                <li key={optionIndex} className={option === mcq.answer ? 'text-green-600 font-semibold' : ''}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }