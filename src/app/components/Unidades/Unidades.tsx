import { CardUnidades } from "../Cards/CardUnidade/CardUnidade";
import Image from "next/image";

export const Unidades = () => {
  return (
    <section className=" bg-white h-220" id="unidades">
      <h2 className="text-2xl text-[#1c2952] text-center">Nossas Unidades</h2>
      <article className="flex justify-center items-center gap-80 mt-20">
        <CardUnidades image={"/Unidade1.png"} />

        <CardUnidades image={"/Unidade2.png"} />
      </article>
      <div className="flex justify-center items-center mt-30">
        <Image src="/logo2.png" alt="" width={100} height={50} />
      </div>
    </section>
  );
};
