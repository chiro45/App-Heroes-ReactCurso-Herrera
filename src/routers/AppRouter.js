import {Routes, Route, BrowserRouter} from 'react-router-dom'

import { LoginScreen } from '../components/login/LoginScreen'

import {DashboardRoutes} from './DashboardRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
    return (
        // el BrowserRouter => nos permite
        <BrowserRouter>
           
            <Routes>
                {/* definimos lo que seria la ruta publica y dentro del element iria el componente 
                y luego lo que seria la ruta publica antees de loguearse */}
                <Route path= '/login' element={
                <PublicRoutes>   
                    <LoginScreen/>
                </PublicRoutes> 
            } />
            {/* definimos lo que seria la ruta privada dentro del element iria el componente 
                y luego lo que seria la ruta privada  unva vez logueado */}
                <Route path='/*' 
                element={  
                    <PrivateRoutes>
                         <DashboardRoutes/>
                    </PrivateRoutes>} />
                    

                {/*  <Route path='/*' element={<DashboardRoutes/>} /> */}
            </Routes>

        </BrowserRouter>
        
        
    )
}
