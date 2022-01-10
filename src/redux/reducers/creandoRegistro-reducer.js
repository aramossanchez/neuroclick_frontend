import {CREANDO} from '../types';

const initialState = {
    creando: false
};

const creandoRegistroReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO EL USUARIO DEL QUE SE ESTÁ VIENDO LA INFORMACIÓN
        case CREANDO :
            return {
                ...state,
                creando: action.payload
            }
            
        default :
            return state
    }
}
export default creandoRegistroReducer;