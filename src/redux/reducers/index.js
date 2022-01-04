import {combineReducers} from 'redux';
import datosVistas from './datosVistas-reducer';
import usuarioSeleccionado from './usuarioSeleccionado-reducer';
import profesionalLogado from './profesionalLogado-reducer';


const rootReducer = combineReducers({
    datosVistas, usuarioSeleccionado, profesionalLogado
});

export default rootReducer;