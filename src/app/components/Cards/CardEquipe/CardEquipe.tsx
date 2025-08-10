import Image from "next/image"
import { StaticImageData } from "next/image";
type PropsEquipe={
    nome:string
    image:string | StaticImageData;
}
export const CardEquipe: React.FC<PropsEquipe>=({nome, image})=>{
    return(
        <div>
         <Image
         src={image}
         alt=""
         width={200}
         height={200}
         />
         <h3 className="text-center text-xl mt-5 text-[#ebcf53]">{nome}</h3>
        </div>
    )
} 