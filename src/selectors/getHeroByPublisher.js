
import {heroes} from '../data/heroes'
//funcion para diferenciar los heroes por publicadora
export const getHeroesByPUblisher = (publisher) =>{
    //valores permitidos
    const validPublished = ['Marvel Comics', 'DC Comics']
    //realizamos una validacion de si no contienen los valores permitidos
    if(!validPublished.includes(publisher)){
        throw new Error (`${publisher} no es una publicadora valida`)
    }
    //retorna el contenido filtrado de toda una publicadora
    return heroes.filter(hero => hero.publisher === publisher)
}