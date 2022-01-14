import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { EDITANDO } from '../../../redux/types';
import { BORRANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';

const ListadoPruebasHechas = (props) =>{

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
    
    //FORMATEA LA FECHA
    const editarFecha = (fecha) =>{
        let f = new Date(fecha);
        let fvalida = f.toLocaleDateString()
        return fvalida;

    }

    return(
        <div>
            <div className='tabla_nombres_columnas flex_fila_izquierda'>
                |<div className="nombre_columna admin_campo_puntuacion">Puntuación</div>|
                <div className="nombre_columna admin_campo_id_prueba">ID de prueba</div>|
                <div className="nombre_columna admin_campo_id_usuario">ID de usuario</div>|
                <div className="nombre_columna admin_campo_id_profesional">ID de profesional</div>|
                <div className="nombre_columna admin_campo_fecha">Fecha de realización</div>|
            </div>
            {props.listadoCompleto.listado.map((registro)=>{
                return(
                    <div key={registro.id} className='flex_fila_izquierda registros_sin_scroll'>
                        <div className='icono_registro_individual' onClick={()=>mostrarEdicion(registro)}>📝</div>
                        <div className='icono_registro_individual' onClick={()=>preguntarBorrado(registro)}>❌</div>
                        |<div className="registro_individual admin_campo_puntuacion">{registro.puntuacion}</div>|
                        <div className="registro_individual admin_campo_id_prueba">{registro.PruebaID}</div>|
                        <div className="registro_individual admin_campo_id_usuario">{registro.UsuarioID}</div>|
                        <div className="registro_individual admin_campo_id_profesional">{registro.ProfesionalID}</div>|
                        <div className="registro_individual admin_campo_fecha">{editarFecha(registro.createdAt)}</div>|
                    </div>
                )
            })}
        </div>
    )
}
export default connect((state)=>({
    listadoCompleto: state.listadoCompleto
}))(ListadoPruebasHechas);