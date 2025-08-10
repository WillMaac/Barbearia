import React, { SelectHTMLAttributes } from 'react';

export const Select: React.FC<SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return (
    <div className="relative">
      <select
        {...props}
        className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-600 pr-10 transition-shadow"
      >
        {props.children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
};