import {USUARIO} from '../types';

const initialState = {
    usuario:{}
};

const usuarioSeleccionadoReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO EL USUARIO DEL QUE SE ESTÁ VIENDO LA INFORMACIÓN
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