import Image from "next/image"
import { StaticImageData } from "next/image";
type UnidadeProps = {
        nome?:string
        image:string | StaticImageData;
    }
export const CardUnidades: React.FC<UnidadeProps>=({nome, image})=>{
    return(
        <div>
           <Image
           src={image}
           alt="alte"
           width={400}
           height={500}/>
           <h3>{nome}</h3>
        </div>
    )
}