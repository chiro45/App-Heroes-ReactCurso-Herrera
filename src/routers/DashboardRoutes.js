import {Routes, Route} from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'
import {Hero} from '../components/hero/Hero'

export const DashboardRoutes = () => {
    return (
        <>
         <Navbar/>
         <div className='container'>
             {/* //definimos las routas */}
         <Routes>
                <Route path= 'Marvel' element={<MarvelScreen/>}></Route>
                <Route path= 'dc' element={<DcScreen/>}></Route>
                
                <Route path= 'hero/:heroeId' element={<Hero/>}></Route>

                <Route path= 'search' element={<SearchScreen/>}></Route>

                <Route path= '/' element= {<MarvelScreen/>} ></Route>
        </Routes>  
        </div>       

        </>
    )
}
