import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { EDITANDO } from '../../../redux/types';
import { BORRANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';

const Listado_usuarios = (props) =>{

    //HOOKS
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    //MOSTRAR EDICIÓN DE REGISTRO
    const mostrarEdicion = (registro) => {
        props.dispatch({type:EDITANDO, payload: true});
        props.dispatch({type:REGISTRO, payload: registro});
    }

    //PREGUNTAR POR ELIMINACIÓN DE REGISTRO DE BASE DE DATOS
    const preguntarBorrado = (registro) => {
        props.dispatch({type:BORRANDO, payload: true});
        props.dispatch({type:REGISTRO, payload: registro});
    }
    
    return(
        <div>
            <div className='tabla_nombres_columnas flex_fila_izquierda'>
                |<div className="nombre_columna">ID</div>|
                <div className="nombre_columna">Nombre</div>|
                <div className="nombre_columna">Apellidos</div>|
                <div className="nombre_columna_largo">Dirección</div>|
                <div className="nombre_columna">Teléfono de contacto</div>|
                <div className="nombre_columna">Fecha de nacimiento</div>|
                <div className="nombre_columna">Peso</div>|
                <div className="nombre_columna">Estatura</div>|
                <div className="nombre_columna">Pensión</div>|
                <div className="nombre_columna">Persona de contacto</div>|
                <div className="nombre_columna">Teléfono de persona de contacto</div>|
                <div className="nombre_columna">Fecha de incorporación</div>|
            </div>
            {props.listadoCompleto.listado.map((registro)=>{
                return(
                    <div key={registro.id} className='registros_admin flex_fila_izquierda'>
                        <div className='icono_registro_individual' onClick={()=>mostrarEdicion(registro)}>📝</div>
                        <div className='icono_registro_individual' onClick={()=>preguntarBorrado(registro)}>❌</div>
                        |<div className="registro_individual">{registro.id}</div>|
                        <div className="registro_individual">{registro.nombre}</div>|
                        <div className="registro_individual">{registro.apellidos}</div>|
                        <div className="registro_individual_largo">{registro.direccion}</div>|
                        <div className="registro_individual">{registro.telefono_usuario}</div>|
                        <div className="registro_individual">{registro.fecha_nacimiento}</div>|
                        <div className="registro_individual">{registro.peso}</div>|
                        <div className="registro_individual">{registro.estatura}</div>|
                        <div className="registro_individual">{registro.pension}</div>|
                        <div className="registro_individual">{registro.persona_contacto}</div>|
                        <div className="registro_individual">{registro.telefono_contacto}</div>|
                        <div className="registro_individual">{registro.createdAt}</div>|
                    </div>
                )
            })}
        </div>
    )
}
export default connect((state)=>({
    listadoCompleto: state.listadoCompleto
}))(Listado_usuarios);