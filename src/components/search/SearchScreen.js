import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";


  
export const SearchScreen = () => {
    
    const navigate = useNavigate()
    //nos da la locationd e donde estamos en a pagina
    const location = useLocation()

    const {q = ''} = queryString.parse(location.search)

   
    const [ formValues, handleInputChange, reset] = useForm( {
        searchText: q,

    });
   
    const {searchText} = formValues
   
    
    const heroresFilteted =  useMemo(()=> getHeroesByName(q),[q])
    const handleSearch = (e)=>{
        e.preventDefault()
        navigate(`?q=${searchText}`)
        reset()
    }

    return (
        <>
        <h1>Busqueda</h1>
        <div className="row">
            <div className="col-5">
                Buscar
                <hr/>
                <form onSubmit={handleSearch}>
                    <input
                    type='text'
                    placeholder="Busca un superheroe"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={handleInputChange}
                    >
                    </input>
                    <button type="submit" className="btn btn-outline-primary mt-1">
                        Buscar
                    </button>
                
                </form>
            </div>
            <div className='col-7 animate__animated animate__fadeIn '>
                <h4>resultado</h4>
                {
                    (q==='')
                     ? <div className="alert alert-info animate__animated animate__fadeIn"> Buscar un heroe</div>
                     : (heroresFilteted.length === 0)
                      && <div className="alert alert-danger animate__animated animate__fadeIn">No hubo resultado con {q}</div>
                }
                {
                heroresFilteted.map(hero=>(
                <HeroCard

                key={hero.id}
                {...hero}
                    />

                ))}
            </div>
        </div>

        </>
    )
}
