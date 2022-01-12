import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { EDITANDO } from '../../../redux/types';
import { BORRANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';

const ListadoProfesionales = (props) =>{

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
                |<div className="nombre_columna admin_campo_nombre">Nombre</div>|
                <div className="nombre_columna admin_campo_apellidos">Apellidos</div>|
                <div className="nombre_columna admin_campo_email">Correo electrónico</div>|
                <div className="nombre_columna admin_campo_direccion">Dirección</div>|
                <div className="nombre_columna admin_campo_telefono">Teléfono de contacto</div>|
                <div className="nombre_columna admin_campo_rol">Rol</div>|
                <div className="nombre_columna admin_campo_fecha">Fecha de incorporación</div>|
            </div>
            {props.listadoCompleto.listado.map((registro)=>{
                return(
                    <div key={registro.id} className='registros_admin flex_fila_izquierda'>
                        <div className='icono_registro_individual' onClick={()=>mostrarEdicion(registro)}>📝</div>
                        <div className='icono_registro_individual' onClick={()=>preguntarBorrado(registro)}>❌</div>
                        |<div className="registro_individual admin_campo_nombre">{registro.nombre}</div>|
                        <div className="registro_individual admin_campo_apellidos">{registro.apellidos}</div>|
                        <div className="registro_individual admin_campo_email">{registro.correo_electronico}</div>|
                        <div className="registro_individual admin_campo_direccion">{registro.direccion}</div>|
                        <div className="registro_individual admin_campo_telefono">{registro.telefono_contacto}</div>|
                        <div className="registro_individual admin_campo_rol">{registro.rol}</div>|
                        <div className="registro_individual admin_campo_fecha">{registro.createdAt}</div>|
                    </div>
                )
            })}
        </div>
    )
}
export default connect((state)=>({
    listadoCompleto: state.listadoCompleto
}))(ListadoProfesionales);