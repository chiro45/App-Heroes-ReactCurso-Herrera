import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"




//rutas que se pueden acceder ya una vez que el usuario ha sido logueado

export const PrivateRoutes = ({children}) => {
    //desestructuramos el user
   const {user} = useContext(AuthContext)
    //obtenemos el objeto de loacion
    const {pathname, search}  = useLocation()
    localStorage.setItem('lastPath', pathname + search)
   

   //retornamos en el caso de true los hijos y sino redireccioinamos al login
    return user.logged
        ? children
        : <Navigate to='/login'/>
}
