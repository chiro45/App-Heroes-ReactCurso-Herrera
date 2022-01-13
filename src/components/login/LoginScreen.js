import { useNavigate } from "react-router-dom"

export const LoginScreen = () => {
    //ofrece una funcion que nos permite navegar a otra PANTALLA    
    const navigate = useNavigate()
    //se activa al pulsar el boton login 
    //nos deja entrar a la aplicacion
    const handleLogin = ()=>{
        navigate('/',{
            replace: true
        })
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
