import {combineReducers} from 'redux';
import datosVistas from './datosVistas-reducer';
import usuarioSeleccionado from './usuarioSeleccionado-reducer';
import profesionalLogado from './profesionalLogado-reducer';
import listadoCompleto from './listadoCompleto-reducer';
import creandoRegistro from './creandoRegistro-reducer';
import editandoRegistro from './editandoRegistro-reducer';
import borrandoRegistro from './borrandoRegistro-reducer';
import registroSeleccionado from './registroSeleccionado-reducer';


const rootReducer = combineReducers({
    datosVistas, usuarioSeleccionado, profesionalLogado, listadoCompleto, creandoRegistro, editandoRegistro, borrandoRegistro, registroSeleccionado
});

export default rootReducer;