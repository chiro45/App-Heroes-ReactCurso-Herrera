import { Link } from "react-router-dom"


//creamos el rafc y le decimos que necesita todas estas propiedades para mostrarse
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
        
    const imgPath =`assets/${id}.jpg`
    return (
        <div className="col">
            <div className="card">
                
                <div className='row no-gutters'>
                    <div className="col-4">
                        
                        <img src= {imgPath } className="card-img" alt={superhero}/>

                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                           {
                            //si alter y char son diferentes entonces mostrames los caracteres
                            (alter_ego != characters) && 

                            <p className="text-muted">{characters}</p>
                             
                           }

                           <p className="card-text">
                               <small className="text-muted">{first_appearance}</small>
                           </p>
                           {/* ruteo a ver mas  */}
                           <Link to={`/hero/${id}`}>
                               Mas...
                           </Link>   
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )




}


