import { CardEquipe } from "../Cards/CardEquipe/CardEquipe"

export const Equipe = ()=>{
    return(
        <section className="h-200">
            <h2 className="text-center font-bold text-2xl mt-25">Nossa Equipe</h2>
            <article className="flex justify-center items-center gap-20 mt-40">
                <CardEquipe
                image={'/barber1.png'}
                nome="Victor Silva
                "
                />

                <CardEquipe
                image={'/Barber2.png'}
                nome="André Andrade
                "
                />

                <CardEquipe
                image={'/Barber3.png'}
                nome="Lucas Paes
                "
                />

                <CardEquipe
                image={'/Barber4.png'}
                nome="Lauis Rocha
                "
                />
            </article>
        </section>
    )
}