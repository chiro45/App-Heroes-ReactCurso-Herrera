import { HeroCard } from "./HeroCard"

import { getHeroesByPUblisher } from "../../selectors/getHeroByPublisher"
import { useMemo } from "react"

export const HeroList = ({publisher }) => {
    //memorizamos la publicadora del heroe y cambia cuando cambia la publicadora
    const heroes = useMemo( ()=>  getHeroesByPUblisher(publisher),[publisher])

    return (
        
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
        

        
             {
                 //hacemos un map del objeto heroes, y imprimimos el componente cuantas veces sea necesario
                 heroes.map(hero => (
                     <HeroCard 
                     key={hero.id}
                     {...hero}>
                         
                     </HeroCard>
                     
                 ))
             }
               
        
        </div>
    )
}
