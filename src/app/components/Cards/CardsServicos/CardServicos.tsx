import Image from "next/image"
import { StaticImageData } from "next/image";
type ServiceProps = {
        titulo:string
        valor:string
        image:string | StaticImageData;
    }
export const CardServicos: React.FC<ServiceProps>=({titulo, valor, image})=>{
    return(
        <article className="bg-white border-2 py-2 px-2 rounded-[10px] shadow-2xl border-amber-200 cursor-pointer hover:transform-scale-100">
            <div>
            <Image
        src={image}
        alt={titulo}
        width={300}
        height={100}
        className="rounded-md object-cover mx-auto"
      />
      <div className="flex items-center gap-20 justify-center mt-10">
      <h3 className="text-2xl text-black">{titulo}</h3>
      <span className="bg-blue-950 border-2 border-amber-300 rounded-[10px] py-1 px-2">{valor}</span>
      </div>
      </div>
        </article>
    )
}