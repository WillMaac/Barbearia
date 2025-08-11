"use client";
import { useState } from "react";
import { Navbar } from "@/app/components/Navbar/Navbar";
import { Homee } from "@/app/components/Home/Header";
import { Sobre } from "@/app/components/Sobre/Sobre";
import { Servicos } from "@/app/components/Servicos/Servicos";
import { Equipe } from "@/app/components/Equipe/Equipe";
import { Unidades } from "@/app/components/Unidades/Unidades";
import { AgendamentoModal } from "@/app/components/Cards/Agendamentos/AgendamentoModal";

export default function Inicio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Navbar onAgendarClick={() => setIsModalOpen(true)}/>
      <main className="overflow-x-hidden">
      <Homee onAgendarClick={() => setIsModalOpen(true)} />
      <Sobre/>
      <Servicos/>
      <Equipe/>
      <Unidades/>
      </main>
      <AgendamentoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
