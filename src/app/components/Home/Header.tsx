interface HomeeProps {
  onAgendarClick: () => void;
}

export const Homee = ({ onAgendarClick }: HomeeProps) => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/photo.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          ESTILO É UM REFLEXO DA SUA ATITUDE <br /> E SUA PERSONALIDADE.
        </h1>
        <p className="mt-4 text-white/90">
          Horário de funcionamento: 09:00 às 18:00
        </p>
        <button 
        onClick={onAgendarClick}
        className="mt-6 bg-yellow-500 text-black font-semibold px-10 py-3 rounded-xl cursor-pointer hover:bg-yellow-600 transition">
          Agendar horário
        </button>
      </div>
    </section>
  );
}
