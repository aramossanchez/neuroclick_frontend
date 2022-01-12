import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { EDITANDO } from '../../../redux/types';
import { BORRANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';

const ListadoEnfermedadesUsuarios = (props) =>{

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
                |<div className="nombre_columna admin_campo_id_usuario">ID de usuario</div>|
                <div className="nombre_columna admin_campo_id_enfermedad">ID de enfermedad</div>|
            </div>
            {props.listadoCompleto.listado.map((registro)=>{
                return(
                    <div key={registro.id} className='flex_fila_izquierda registros_sin_scroll'>
                        <div className='icono_registro_individual' onClick={()=>mostrarEdicion(registro)}>📝</div>
                        <div className='icono_registro_individual' onClick={()=>preguntarBorrado(registro)}>❌</div>
                        |<div className="registro_individual admin_campo_id_usuario">{registro.UsuarioID}</div>|
                        <div className="registro_individual admin_campo_id_enfermedad">{registro.EnfermedadID}</div>|
                    </div>
                )
            })}
        </div>
    )
}
export default connect((state)=>({
    listadoCompleto: state.listadoCompleto
}))(ListadoEnfermedadesUsuarios);