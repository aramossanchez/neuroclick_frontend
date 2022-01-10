import {REGISTRO} from '../types';

const initialState = {
    registro:{}
};

const registroSeleccionadoReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO EL USUARIO DEL QUE SE ESTÁ VIENDO LA INFORMACIÓN
        case REGISTRO :
            return {
                ...state,
                registro: action.payload
            }
            
        default :
            return state
    }
}
export default registroSeleccionadoReducer;