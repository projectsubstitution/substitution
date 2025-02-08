import React from 'react';

interface ProgressProps {
  value: number;
  max: number;
}

const Progress: React.FC<ProgressProps> = ({ value, max }) => {
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${(value / max) * 100}%` }} />
    </div>
  );
};

export default Progress;