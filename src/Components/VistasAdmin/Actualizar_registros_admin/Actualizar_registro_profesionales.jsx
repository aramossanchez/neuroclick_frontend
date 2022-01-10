import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { LISTADO } from '../../../redux/types';
import { EDITANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';

const Actualizar_registro_profesionales = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    //TRAER LISTADO COMPLETO
    const traerListado = async () =>{
        try {
            let res = await axios.get(`${api.conexion}/${props.vista}`, props.config);
            props.dispatch({type:LISTADO, payload: res.data});
        } catch (error) {
            setMensajeError(error);
        }
    }
    
    //CERRAR VENTANA DONDE EDITAR DATOS DE REGISTRO
    const cerrarEditando = () => {
        props.dispatch({type:EDITANDO, payload: false});
    }

    //ACTUALIZAR REGISTRO DE LA BASE DE DATOS
    const editarRegistro = async () =>{
        let body = {
            correo_electronico: props.registroSeleccionado.registro.correo_electronico,
            nombre: props.registroSeleccionado.registro.nombre,
            apellidos: props.registroSeleccionado.registro.apellidos,
            direccion: props.registroSeleccionado.registro.direccion,
            telefono_contacto: props.registroSeleccionado.registro.telefono_contacto,
            rol: props.registroSeleccionado.registro.rol,
        }
        try {
            await axios.put(`${api.conexion}/${props.vista}/${props.registroSeleccionado.registro.id}`, body, props.config);
            props.dispatch({type:REGISTRO, payload: {}});
            props.dispatch({type:EDITANDO, payload: false});
            traerListado();
        } catch (error) {
            setMensajeError(error);
        }
    }

    //GUARDAR DATOS MODIFICADOS DEL REGISTRO
    const datosActualizarRegistro = (e) =>{
        props.dispatch({type:REGISTRO, payload: {...props.registroSeleccionado.registro, [e.target.name]: e.target.value}});
    }

    return(
        <div>
            <div className='contenedor_mensaje'></div>
            <div className='editar_registro'>
                <h2 className='mb'>Modificar registro</h2>
                <div className='flex_fila_muy_separado mb'>
                    <div className="label_registro_admin flex_columna_izquierda mi">
                        <label htmlFor="nombre">Nombre:</label>
                        <label htmlFor="apellidos">Apellidos:</label>
                        <label htmlFor="correo_electronico">Correo electrónico:</label>
                        <label htmlFor="direccion">Dirección:</label>
                        <label htmlFor="telefono_contacto">Teléfono:</label>
                        <label htmlFor="rol">Rol:</label>
                    </div>
                    <div className="input_registro_admin flex_columna_izquierda">
                        <input type="text" onChange={(e)=>datosActualizarRegistro(e)} name="nombre" value={props.registroSeleccionado.registro.nombre}/>
                        <input type="text" onChange={(e)=>datosActualizarRegistro(e)} name="apellidos" value={props.registroSeleccionado.registro.apellidos}/>
                        <input type="text" onChange={(e)=>datosActualizarRegistro(e)} name="correo_electronico" value={props.registroSeleccionado.registro.correo_electronico}/>
                        <input type="text" onChange={(e)=>datosActualizarRegistro(e)} name="direccion" value={props.registroSeleccionado.registro.direccion}/>
                        <input type="text" onChange={(e)=>datosActualizarRegistro(e)} name="telefono_contacto" value={props.registroSeleccionado.registro.telefono_contacto}/>
                        <input type="text" onChange={(e)=>datosActualizarRegistro(e)} name="rol" value={props.registroSeleccionado.registro.rol}/>
                    </div>
                </div>
                <div className="botones_borrado flex_fila_separado">
                    <div className="boton" onClick={()=>editarRegistro()}>Actualizar registro</div>
                    <div className="boton" onClick={()=>cerrarEditando()}>Cerrar este mensaje</div>
                </div>
            </div>
        </div>
    )
}
export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    listadoCompleto: state.listadoCompleto,
    editandoRegistro: state.editandoRegistro,
    borrandoRegistro: state.borrandoRegistro,
    registroSeleccionado: state.registroSeleccionado
}))(Actualizar_registro_profesionales);