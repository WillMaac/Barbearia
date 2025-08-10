import Image from "next/image"
export const Sobre = () =>{
    return(
        <section className="" id="sobre">
            <article className="flex justify-center items-center gap-50">
                <div>
            <Image
            src="/barber.png"
            alt="alt"
            width={550}
            height={350}
            />
            </div>
            <div className="text">
            <h2 className="font-bold text-2xl mb-10">Sobre</h2>
            <p className="text-xl">Na Barber, sua experiência é a nossa prioridade! Criamos um ambiente que é o refúgio perfeito para o homem moderno. Aqui, você encontra o corte e a barba perfeitos, além de um tempo para relaxar e se desconectar.</p>
            <p className="mt-5 text-xl mb-5">Usamos produtos de alta qualidade e estamos sempre atualizados nas últimas tendências para garantir que você saia não apenas com um ótimo visual, mas também renovado.</p>
            <span className="text-xl">Horário de funcionamento: 09:00 ás 18:00</span>
            </div>
            </article>
        </section>
        )
        };