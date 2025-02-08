import { useState } from 'react';

const useToast = () => {
  const [toasts, setToasts] = useState<string[]>([]);

  const addToast = (message: string) => {
    setToasts((prev) => [...prev, message]);
  };

  const removeToast = (index: number) => {
    setToasts((prev) => prev.filter((_, i) => i !== index));
  };

  return { toasts, addToast, removeToast };
};

export default useToast;