import {EDITANDO} from '../types';

const initialState = {
    editando:false
};

const editandoRegistroReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO EL USUARIO DEL QUE SE ESTÁ VIENDO LA INFORMACIÓN
        case EDITANDO :
            return {
                ...state,
                editando: action.payload
            }
            
        default :
            return state
    }
}
export default editandoRegistroReducer;