"use client";
import React, { useState } from 'react';
import { Input } from './Input'; 
import { Select } from './Select';
import { TimePicker } from './TimePicker';

export const AgendamentoForm: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const horariosDisponiveis = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">Nome completo</label>
        <Input id="nome" placeholder="Digite seu nome" />
      </div>
      
      <div>
        <label htmlFor="data" className="block text-sm font-medium text-gray-300 mb-1">Selecione a data desejada</label>
        <Input id="data" type="date" />
      </div>

      <div>
        <label htmlFor="unidade" className="block text-sm font-medium text-gray-300 mb-1">Selecione uma unidade</label>
        <Select id="unidade">
          <option>Rua Grande, Natal - RN</option>
          <option>Rua Pequena, Natal - RN</option>
        </Select>
      </div>

      <div>
        <label htmlFor="horarios" className="block text-sm font-medium text-gray-300 mb-2">Horários</label>
        <TimePicker
          horarios={horariosDisponiveis}
          selectedTime={selectedTime}
          onSelectTime={setSelectedTime}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-600 text-black font-semibold py-3 rounded-xl shadow-xl transition-colors hover:bg-yellow-500"
      >
        Agendar
      </button>
    </form>
  );
};