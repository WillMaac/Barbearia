import Image from "next/image";

export const Sobre = () => {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-7 py-12">
      <article className="flex flex-col items-center text-center gap-6 md:flex-row md:items-start md:text-left md:gap-10 lg:gap-12">
        {/* imagem */}
        <div className="relative w-full max-w-md h-64 md:h-72 lg:h-80 xl:h-[350px]">
          <Image
            src="/barber.png"
            alt="Interior da barbearia com cadeiras e espelhos"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover rounded-2xl shadow-md"
            priority
          />
        </div>

        {/* texto */}
        <div className="w-full">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">Sobre</h2>
          <p className="text-base md:text-lg leading-relaxed">
            Na Barber, sua experiência é a nossa prioridade! Criamos um ambiente que é o refúgio perfeito para o homem moderno. Aqui, você encontra o corte e a barba perfeitos, além de um tempo para relaxar e se desconectar.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed mb-4">
            Usamos produtos de alta qualidade e estamos sempre atualizados nas últimas tendências para garantir que você saia não apenas com um ótimo visual, mas também renovado.
          </p>
          <span className="text-sm md:text-base block">Horário de funcionamento: 09:00 às 18:00</span>
        </div>
      </article>
    </section>
  );
};
