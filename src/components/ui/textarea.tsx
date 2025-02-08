import React from 'react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 p-2 w-full"
      rows={4}
    />
  );
};

export default TextArea;