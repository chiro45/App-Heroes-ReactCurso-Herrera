import { useState } from 'react';

//creamos el coustomHook => definimos la funcion que recibira un objeto como initialState
export const useForm = ( initialState = {} ) => {
    //desestructuramos el valor y el setValue => del hook useState pasandole el initialState
    const [values, setValues] = useState(initialState);
    //la funsion reset vuelve al estado principal cuando nosotros necesitemos borrar el contenido del input
    const reset = () => {
        setValues( initialState );
    }

    //esta funcion recibe el evento target
    const handleInputChange = ({ target }) => {
        //con el operador spread creamo sun copia del estado anterior y seran pasados al nuevo state
        setValues({
            ...values,
            //se sustituye el target name por el target value
            [ target.name ]: target.value
        });

    }
    //retorna value, la funcion para detectar el cambio y para resetear
    return [ values, handleInputChange, reset ];

}