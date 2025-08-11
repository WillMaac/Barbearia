import { CardEquipe } from "../Cards/CardEquipe/CardEquipe";

export const Equipe = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center font-bold text-2xl md:text-3xl mb-12 text-[#FFF]">
          Nossa Equipe
        </h2>

        <article className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 sm:gap-12">
          <CardEquipe image="/barber1.png" nome="Victor Silva" />
          <CardEquipe image="/Barber2.png" nome="André Andrade" />
          <CardEquipe image="/Barber3.png" nome="Lucas Paes" />
          <CardEquipe image="/Barber4.png" nome="Lauis Rocha" />
        </article>
      </div>
    </section>
  );
};
