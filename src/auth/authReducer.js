

// const state ={
//     name:"Luciano",
//     logged: true
// }
//los reducers son funciones puras que no tiene que salirse de su rol para realizar si trabajo
import { types } from "../types/types";

export const autReducer = (state ={},action)=>{
    switch(action.type){
        case types.login:
            return{
                ...action.payload,
                logged: true
            }

        case types.logout:
            return{
                logged: false
            }

            default:
                return state;
    }
}