import React, { useState } from 'react';

interface RejectionFeedbackProps {
  onDone: () => void;
}

const RejectionFeedback: React.FC<RejectionFeedbackProps> = ({ onDone }) => {
  const [reason, setReason] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Reason:', reason);
    console.log('Feedback:', feedback);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Rejection Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="reason" className="block font-semibold mb-1">
              Reason for Rejection
            </label>
            <input
              type="text"
              id="reason"
              value={reason}
              onChange={handleReasonChange}
              placeholder="Enter"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block font-semibold mb-1">
              Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Enter Feedback"
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
           onClick={onDone}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default RejectionFeedback;