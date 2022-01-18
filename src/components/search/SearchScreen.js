import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";

//pantalla de busqueda
  
export const SearchScreen = () => {
    
    const navigate = useNavigate()
    //nos da la locationd e donde estamos en a pagina
    const location = useLocation(),
    //nos permite ver donde esta la q=> en la query que nos extrae el heroe
    {q = ''} = queryString.parse(location.search)

    //usamos el useForm
    const [ formValues, handleInputChange, reset] = useForm( {
        searchText: q,

    });
   
    const {searchText} = formValues
   
    //memorizamos la funcion y solo cambia su valor cuando cambia q
    const heroresFilteted =  useMemo(()=> getHeroesByName(q),[q])
    //este evento nos permite cambiar a la pagina del superheroe
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
                    //si es igual a vacio nos dice busca un heroe
                    (q==='')
                     ? <div className="alert alert-info animate__animated animate__fadeIn"> Buscar un heroe</div>
                     : (heroresFilteted.length === 0)
                     //si no se retorna un heroe entonces
                      && <div className="alert alert-danger animate__animated animate__fadeIn">No hubo resultado con {q}</div>
                }
                {
                //mapeo de los heroes retornados
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
