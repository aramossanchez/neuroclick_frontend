import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { LISTADO } from '../../../redux/types';
import { EDITANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';

const Actualizar_registro_usuarios = (props) =>{

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
            nombre: props.registroSeleccionado.registro.nombre,
            apellidos: props.registroSeleccionado.registro.apellidos,
            direccion: props.registroSeleccionado.registro.direccion,
            telefono_usuario: props.registroSeleccionado.registro.telefono_usuario,
            pension: props.registroSeleccionado.registro.pension,
            persona_contacto: props.registroSeleccionado.registro.persona_contacto,
            telefono_contacto: props.registroSeleccionado.registro.telefono_contacto,
            fecha_nacimiento: props.registroSeleccionado.registro.fecha_nacimiento,
            peso: props.registroSeleccionado.registro.peso,
            estatura: props.registroSeleccionado.registro.estatura,
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
                        <label htmlFor="calle">Dirección:</label>
                        <label htmlFor="telefono_usuario">Teléfono de contacto:</label>
                        <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
                        <label htmlFor="peso">Peso:</label>
                        <label htmlFor="estatura">Estatura:</label>
                        <label htmlFor="pension">Pensión:</label>
                        <label htmlFor="persona_contacto">Persona de contacto:</label>
                        <label htmlFor="telefono_contacto">Teléfono de persona de contacto:</label>
                    </div>
                    <div className="input_registro_admin flex_columna_izquierda">
                        <input type="text" name="nombre" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.nombre}/>
                        <input type="text" name="apellidos" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.apellidos}/>
                        <input type="text" name="direccion" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.direccion}/>
                        <input type="text" name="telefono_usuario" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.telefono_usuario}/>
                        <input type="text" name="fecha_nacimiento" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.fecha_nacimiento}/>
                        <input type="text" name="peso" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.peso}/>
                        <input type="text" name="estatura" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.estatura}/>
                        <input type="text" name="pension" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.pension}/>
                        <input type="text" name="persona_contacto" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.persona_contacto}/>
                        <input type="text" name="telefono_contacto" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.telefono_contacto}/></div>
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
    registroSeleccionado: state.registroSeleccionado
}))(Actualizar_registro_usuarios);