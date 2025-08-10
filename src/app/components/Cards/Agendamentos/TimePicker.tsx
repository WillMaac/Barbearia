import React from 'react';

type Props = {
  horarios: string[];
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
};

export const TimePicker: React.FC<Props> = ({ horarios, selectedTime, onSelectTime }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {horarios.map(hora => (
        <button
          key={hora}
          type="button"
          onClick={() => onSelectTime(hora)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors border ${
            selectedTime === hora
              ? 'bg-yellow-600 text-black border-yellow-600'
              : 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700'
          }`}
        >
          {hora}
        </button>
      ))}
    </div>
  );
};