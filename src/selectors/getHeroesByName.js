

import {heroes} from '../data/heroes'

//retorna los heroes con coincidencia en nombre
export const getHeroesByName = (name = '')=>{
  
    //si no hay nada escrito retonra un array vacio
    if(name.length ===0)return [];

    //retorna y filtra los heroes 
   return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))




}