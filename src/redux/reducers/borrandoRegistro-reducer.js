import {BORRANDO} from '../types';

const initialState = {
    borrando:{}
};

const borrandoRegistroReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO EL USUARIO DEL QUE SE ESTÁ VIENDO LA INFORMACIÓN
        case BORRANDO :
            return {
                ...state,
                borrando: action.payload
            }
            
        default :
            return state
    }
}
export default borrandoRegistroReducer;