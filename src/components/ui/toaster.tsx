import React from 'react';

const Toaster: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4">
      {/* This would be where toast notifications are rendered */}
      <Toast message="This is a toast notification!" onClose={() => {}} />
    </div>
  );
};

export default Toaster;