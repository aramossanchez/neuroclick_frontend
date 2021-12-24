import {combineReducers} from 'redux';
import datosVistas from './datosVistas-reducer';
import usuarioSeleccionado from './usuarioSeleccionado-reducer';


const rootReducer = combineReducers({
    datosVistas, usuarioSeleccionado
});

export default rootReducer;