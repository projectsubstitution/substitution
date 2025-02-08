import React from 'react';

interface ToggleGroupProps {
  options: { label: string; value: string }[];
  selectedValues: string[];
  onChange: (value: string) => void;
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({ options, selectedValues, onChange }) => {
  return (
    <div className="flex">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`p-2 ${selectedValues.includes(option.value) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleGroup;