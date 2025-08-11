"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  onAgendarClick: () => void;
};

export const Navbar = ({ onAgendarClick }: NavbarProps)=> {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-4 md:px-8 text-white bg-black/30 backdrop-blur-md"
        style={{ boxShadow: "0 1px 0px rgb(146, 122, 15)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo da Elite Classic Barbearia"
            width={50}
            height={42}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          <li>
            <a
              href="#sobre"
              className="relative font-medium transition-transform duration-200 hover:scale-105"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#unidades"
              className="relative font-medium transition-transform duration-200 hover:scale-105"
            >
              Unidades
            </a>
          </li>
          <li>
            <a
              href="#visagismo"
              className="relative font-medium transition-transform duration-200 hover:scale-105"
            >
              Visagismo
            </a>
          </li>
          <li>
            <a
              href="#servicos"
              className="relative font-medium transition-transform duration-200 hover:scale-105"
            >
              Serviços
            </a>
          </li>
        </ul>

        {/* Desktop botão */}
        <div className="hidden md:flex md:items-center">
          <button
            onClick={onAgendarClick}
            className="px-4 py-1 rounded-2xl bg-yellow-500 shadow-sm shadow-amber-700 text-black font-medium hover:brightness-95"
          >
            Agendar
          </button>
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            {open ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 18L18 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 6h18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12h18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 18h18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed left-0 right-0 top-16 z-40 transform origin-top transition-transform duration-300 ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md p-6 flex flex-col items-center gap-4">
          <a
            href="#sobre"
            onClick={() => setOpen(false)}
            className="w-full text-center py-2 font-medium"
          >
            Sobre
          </a>
          <a
            href="#unidades"
            onClick={() => setOpen(false)}
            className="w-full text-center py-2 font-medium"
          >
            Unidades
          </a>
          <a
            href="#visagismo"
            onClick={() => setOpen(false)}
            className="w-full text-center py-2 font-medium"
          >
            Visagismo
          </a>
          <a
            href="#servicos"
            onClick={() => setOpen(false)}
            className="w-full text-center py-2 font-medium"
          >
            Serviços
          </a>
          <button
            onClick={() => {
              setOpen(false);
              onAgendarClick();
            }}
            className="mt-2 w-full py-2 rounded-2xl bg-yellow-500 shadow-sm shadow-amber-700 text-black font-medium"
          >
            Agendar
          </button>
        </div>
      </div>

      {/* Espaço para não esconder conteúdo */}
      <div className="h-16" />
    </header>
  );
}
