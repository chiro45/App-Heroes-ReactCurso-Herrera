import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom"

import {getHeroById} from '../../selectors/getHeroById'

 

//import batman from '../../assets/dc-batman.jpg' para un recurso estatico
const heroImages = require.context('../../assets', true)

//pagina de heroe

export const Hero = () => {
   //el useNavigate nos permite volver una pagina atras en este caso
   const Navigate = useNavigate();
    
    //el use params saca los parametros de la url
    const {heroeId} = useParams();
    //memorizamos el heroe y luego este se actualiza cada vez que cambie
    const hero = useMemo( () => getHeroById(heroeId),[heroeId])
    //desestructuramos todas las propiedades de hero
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero
    //si es diferente a hero volvemos a la pagina main
    if(!hero) {
        return ( <Navigate to="/"/>)
    }
    //ruta de imagenes con el id 
    const imgPath = heroImages(`./${id}.jpg`)
    //retornamos una pagina atras cuando se dispare el evento
    const handleReturn = ()=>{
        Navigate(-1)
    }

    return (
        <div className="row mt-5">
        <div className="col-4">
        <img src= {imgPath } className="img-thumbnail animate__animated animate__bounceInLeft" 
        alt={superhero}/>
           
        </div>
        <div className="col-8 animate__animated animate__fadeIn">
            <h3 >{superhero}</h3>
            <ul className="list-group-flush">
            <li className='list-group-item'><b>Alter ego: {alter_ego}</b></li>
            <li className='list-group-item'><b>Publicadora: {publisher}</b></li>
            <li className='list-group-item'><b>Primera aparicion: {first_appearance}</b></li>
            </ul>
            <h5 className="mt-3">Characters:</h5>
            <p>{characters}</p>

            <button
            className="btn btn-outline-primary"
            onClick={handleReturn}
            >Regresar</button>
        </div>
        </div>
    )
}
