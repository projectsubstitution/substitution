import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        className="hidden"
      />
      <span className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${checked ? 'bg-blue-500' : ''}`}>
        <span className={`w-4 h-4 bg-white rounded-full shadow-md transform ${checked ? 'translate-x-4' : ''}`} />
      </span>
    </label>
  );
};

export default Toggle;