import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom"

import {getHeroById} from '../../selectors/getHeroById'


export const Hero = () => {
   
   const Navigate = useNavigate();
    
    
    const {heroeId} = useParams();
    //memorizamos el heroe y luego este se actualiza cada vez que cambie
    const hero = useMemo( () => getHeroById(heroeId),[heroeId])
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero
    if(!hero) {
        return ( <Navigate to="/"/>)
    }
    const imgPath =`/assets/${id}.jpg`
    
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
            <h3 >{hero.superhero}</h3>
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
