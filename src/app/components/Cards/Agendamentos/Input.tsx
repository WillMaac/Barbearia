import React, { InputHTMLAttributes } from 'react';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 placeholder-gray-500 transition-shadow"
    />
  );
};