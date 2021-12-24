import {USUARIO} from '../types';

const initialState = {
    usuario:{}
};

const usuarioSeleccionadoReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO COMO LA VISTA ACTUAL, LA VISTA HISTORIA CLINICA
        case USUARIO :
            return {
                ...state,
                usuario: action.payload
            }
            
        default :
            return state
    }
}
export default usuarioSeleccionadoReducer;