import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { types } from "../../types/types"

export const LoginScreen = () => {
    //ofrece una funcion que nos permite navegar a otra PANTALLA    
    const navigate = useNavigate()
   
    const {dispatch} = useContext(AuthContext)
    //se activa al pulsar el boton login 
    //nos deja entrar a la aplicacion
    const handleLogin = ()=>{
        //obtenemos la ultimaurl  para la vuelta del login asi reormamos donde dejamo sla app
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate(lastPath,{
            replace: true
        })
        //realiza la accion de loguear el user
        const action ={
            type: types.login,
            payload:{
                name: "Luciano",
            },
        }
        dispatch(action);
    }
    return (
        <div className='container mt-5'>
            <h1>Login</h1>

            <hr/>

            <button 
            className='btn btn-primary'
            onClick={handleLogin}
            >
            Login
            </button>
        </div>
    )
}
