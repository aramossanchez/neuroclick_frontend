import {HISTORIACLINICA} from '../types';

const initialState = {
    vista : ''
};

const datosVistasReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO COMO LA VISTA ACTUAL, LA VISTA HISTORIA CLINICA
        case HISTORIACLINICA :
            return {
                ...state,
                vista: action.payload
            }
            
        default :
            return state
    }
}
export default datosVistasReducer;