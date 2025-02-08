import React, { useState } from 'react';

const Slider: React.FC = () => {
  const [value, setValue] = useState(50);

  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="w-full"
    />
  );
};

export default Slider;