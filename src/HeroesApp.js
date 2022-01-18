
import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { autReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'
//funcion inicializadora => sirve para cuando instanciar el user
const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || {logged:false } 
}

export const HeroesApp = () => {
    //use reducer
    const [user, dispatch] = useReducer(autReducer, {}, init)
    //se dispara cuando el usuario cambia
    useEffect(()=>{
        if(!user) return ;
        //graba en el local storage
        localStorage.setItem('user', JSON.stringify(user))
    },[user])
    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
        <AppRouter/>
        </AuthContext.Provider>
    )
}
