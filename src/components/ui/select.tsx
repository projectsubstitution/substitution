import React from 'react';

interface SelectProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, selectedValue, onChange }) => {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 p-2"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;