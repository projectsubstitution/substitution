import React from 'react';

interface BackButtonProps {
  label?: string; // Optional label for the button
}

const BackButton: React.FC<BackButtonProps> = ({ label = 'Back' }) => {
  const handleBackClick = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <button
      onClick={handleBackClick}
      className="flex items-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l6-6m-6 6l6 6" />
      </svg>
      {label}
    </button>
  );
};

export default BackButton;