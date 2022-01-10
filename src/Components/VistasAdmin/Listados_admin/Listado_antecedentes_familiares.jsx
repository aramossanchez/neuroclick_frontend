import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { EDITANDO } from '../../../redux/types';
import { BORRANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';

const Listado_antecendetes_familiares = (props) =>{

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
                |<div className="nombre_columna">ID de usuario</div>|
                <div className="nombre_columna_largo">Descripción</div>|
            </div>
            {props.listadoCompleto.listado.map((registro)=>{
                return(
                    <div key={registro.id} className='registros_admin flex_fila_izquierda'>
                        <div className='icono_registro_individual' onClick={()=>mostrarEdicion(registro)}>📝</div>
                        <div className='icono_registro_individual' onClick={()=>preguntarBorrado(registro)}>❌</div>
                        |<div className="registro_individual">{registro.UsuarioID}</div>|
                        <div className="registro_individual_largo">{registro.descripcion}</div>|
                    </div>
                )
            })}
        </div>
    )
}
export default connect((state)=>({
    listadoCompleto: state.listadoCompleto
}))(Listado_antecendetes_familiares);