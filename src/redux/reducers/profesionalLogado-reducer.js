import {PROFESIONAL} from '../types';

const initialState = {
    login:{}
};

const profesionalLogadoReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO EL USUARIO DEL QUE SE ESTÁ VIENDO LA INFORMACIÓN
        case PROFESIONAL :
            return {
                ...state,
                login: action.payload
            }
            
        default :
            return state
    }
}
export default profesionalLogadoReducer;