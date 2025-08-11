import { CardServicos } from "../Cards/CardsServicos/CardServicos";

export const Servicos = () => {
  return (
    <section
      id="servicos"
      className="text-center mt-20 sm:mt-32 bg-white py-12 px-4"
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl mb-5 text-[#060f2c]">
          Serviços
        </h2>
        <p className="text-base md:text-xl max-w-2xl mx-auto mb-12 text-[#000]">
          Na Barber, oferecemos os melhores serviços para o seu estilo. Nossos
          barbeiros são especialistas em:
        </p>

        <article className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <CardServicos
            image="/corte.png"
            titulo="Corte de cabelo"
            valor="R$30,00"
          />

          <CardServicos
            image="/Barba.png"
            titulo="Corte e Barba feita"
            valor="R$40,00"
          />

          <CardServicos
            image="/CorteRis.png"
            titulo="Design de listras"
            valor="R$5,00"
          />
        </article>
      </div>
    </section>
  );
};
