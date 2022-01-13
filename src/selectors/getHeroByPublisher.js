
import {heroes} from '../data/heroes'

export const getHeroesByPUblisher = (publisher) =>{
    const validPublished = ['Marvel Comics', 'DC Comics']

    if(!validPublished.includes(publisher)){
        throw new Error (`${publisher} no es una publicadora valida`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}