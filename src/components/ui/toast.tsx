import React from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="bg-green-500 text-white p-4 rounded-md">
      {message}
      <button onClick={onClose} className="ml-4 text-white underline">Close</button>
    </div>
  );
};

export default Toast;