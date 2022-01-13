import { heroes } from "../data/heroes"

//funcion para encontrar los heroes por id

export const getHeroById =  (id='')=>{
//retorna un heroe que tenga exactamente el mismo id pasado
return heroes.find(hero => hero.id === id)



}