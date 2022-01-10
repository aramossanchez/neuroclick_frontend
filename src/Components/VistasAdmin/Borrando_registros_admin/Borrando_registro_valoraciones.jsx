import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { LISTADO } from '../../../redux/types';
import { BORRANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';

const Borrando_registro_valoraciones = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
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
    
    //CERRAR MENSAJE QUE PREGUNTA POR BORRADO DE BASE DE DATOS
    const cerrarPreguntarBorrado = () => {
        props.dispatch({type:BORRANDO, payload: false});
    }

    //ELIMINAR REGISTRO DE LA BASE DE DATOS
    const borrarRegistro = async () =>{
        try {
            await axios.delete(`${api.conexion}/${props.vista}/${props.registroSeleccionado.registro.id}`, props.config);
            props.dispatch({type:REGISTRO, payload: {}});
            props.dispatch({type:BORRANDO, payload: false});
            traerListado();
        } catch (error) {
            setMensajeError(error);
        }
    }

    return(
        <div>
            <div className='contenedor_mensaje'></div>
            <div className='pregunta_borrado'>
                <div className='mb'>¿Estás seguro que quieres eliminar este registro?</div>
                <div className='mb'>{props.registroSeleccionado.registro.pregunta}</div>
                <div className="botones_borrado flex_fila_separado">
                    <div className="boton" onClick={()=>borrarRegistro()}>Borrar registro</div>
                    <div className="boton" onClick={()=>cerrarPreguntarBorrado()}>Cerrar este mensaje</div>
                </div>
            </div>
        </div>
    )
}
export default connect((state)=>({
    registroSeleccionado: state.registroSeleccionado
}))(Borrando_registro_valoraciones);