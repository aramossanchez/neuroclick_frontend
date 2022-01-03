import {VISTASELECCIONADA} from '../types';

const initialState = {
    vista : 'historiaclinica'
};

const datosVistasReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO COMO LA VISTA ACTUAL, LA VISTA HISTORIA CLINICA
        case VISTASELECCIONADA :
            return {
                ...state,
                vista: action.payload
            }
            
        default :
            return state
    }
}
export default datosVistasReducer;