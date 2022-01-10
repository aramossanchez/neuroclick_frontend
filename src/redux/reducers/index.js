import {combineReducers} from 'redux';
import datosVistas from './datosVistas-reducer';
import usuarioSeleccionado from './usuarioSeleccionado-reducer';
import profesionalLogado from './profesionalLogado-reducer';
import listadoCompleto from './listadoCompleto-reducer';


const rootReducer = combineReducers({
    datosVistas, usuarioSeleccionado, profesionalLogado, listadoCompleto
});

export default rootReducer;