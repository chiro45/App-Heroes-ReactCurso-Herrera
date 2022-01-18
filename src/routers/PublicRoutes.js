import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'



//solo se puede acceder a la ruta una vez desues de logueado
export const PublicRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    //en el caso de ya estar logueado permitimos acceder a la pantalla de marvel
    return user.logged
    ?   <Navigate to='/marvel'/>
    : children
}
