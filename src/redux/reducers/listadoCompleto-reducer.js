import {LISTADO} from '../types';

const initialState = {
    listado:[]
};

const listadoCompletoReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO EL USUARIO DEL QUE SE ESTÁ VIENDO LA INFORMACIÓN
        case LISTADO :
            return {
                ...state,
                listado: action.payload
            }
            
        default :
            return state
    }
}
export default listadoCompletoReducer;