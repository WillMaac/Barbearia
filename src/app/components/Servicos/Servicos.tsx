import { CardServicos } from "../Cards/CardsServicos/CardServicos";

export const Servicos = () => {
  return (
    <section id="servicos" className="text-center mt-80 bg-white h-200">
      <h2 className="font-bold text-2xl mb-5 text-[#060f2c]">Serviços</h2>
      <p className="text-xl max-w-120 mx-auto mb-20 text-[#000]">Na Barber, oferecemos os melhores serviços para o seu estilo. Nossos barbeiros são especialistas em:</p>
      <article className="flex justify-center items-center gap-40">
        <CardServicos
        image="/corte.png"
        titulo="Corte de cabelo"
        valor="R$30.00"
/>

<CardServicos
        image="/Barba.png"
        titulo="Corte e Barba feita"
        valor="R$40.00"
/>

<CardServicos
        image="/CorteRis.png"
        titulo="Design de listras"
        valor="R$5.00"
/>
      </article>
    </section>
  );
};
