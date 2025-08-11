import { CardUnidades } from "../Cards/CardUnidade/CardUnidade";
import Image from "next/image";

export const Unidades = () => {
  return (
    <section className="bg-white py-16 px-4" id="unidades">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1c2952] text-center mb-10">
          Nossas Unidades
        </h2>

        <article className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-24 mb-10">
          <CardUnidades image="/Unidade1.png" />
          <CardUnidades image="/Unidade2.png" />
        </article>

        <div className="flex justify-center">
          <Image src="/logo2.png" alt="Logo" width={100} height={50} />
        </div>
      </div>
    </section>
  );
};
