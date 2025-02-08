import React from 'react';

interface RadioGroupProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col">
      {options.map((option) => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;