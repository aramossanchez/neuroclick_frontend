import React from 'react';
import './HistoriaClinica.scss';
import { connect } from 'react-redux';

const HistoriaClinica = (props) =>{

    return(
        <div className='contenedor_historia_clinica contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Datos personales</h2>
            <div className='bloques_historia_clinica flex_fila_muy_separado'>
                <div className="label_historia_clinica_datos flex_columna_izquierda mi">
                    <label htmlFor="nombre_usuario">Nombre:</label>
                    <label htmlFor="apellidos_usuario">Apellidos:</label>
                    <label htmlFor="direccion_usuario">Dirección:</label>
                    <label htmlFor="telefono_usuario">Teléfono:</label>
                </div>
                <div className="input_historia_clinica_datos flex_columna_izquierda">
                    <input type="text" name="nombre_usuario" readOnly value={props.usuarioSeleccionado.usuario.nombre}/>
                    <input type="text" name="apellidos_usuario" readOnly value={props.usuarioSeleccionado.usuario.apellidos}/>
                    <input type="text" name="direccion_usuario" readOnly value={props.usuarioSeleccionado.usuario.direccion}/>
                    <input type="text" name="telefono_usuario" readOnly value={props.usuarioSeleccionado.usuario.telefono_usuario}/>
                </div>
            </div>
            <hr />
            <h2>Social</h2>
            <div className='bloques_historia_clinica flex_fila_muy_separado'>
                <div className="label_historia_clinica_social flex_columna_izquierda mi">
                    <label htmlFor="pension">Pensión:</label>
                    <label htmlFor="persona_contacto">Persona de contacto:</label>
                    <label htmlFor="telefono_contacto">Teléfono de persona de contacto:</label>
                </div>
                <div className="input_historia_clinica_social flex_columna_izquierda">
                    <input type="text" name="pension" readOnly value={props.usuarioSeleccionado.usuario.pension}/>
                    <input type="text" name="persona_contacto" readOnly value={props.usuarioSeleccionado.usuario.persona_contacto}/>
                    <input type="text" name="telefono_contacto" readOnly value={props.usuarioSeleccionado.usuario.telefono_contacto}/>
                </div>
            </div>
        </div>
    )
}
export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado
}))(HistoriaClinica);