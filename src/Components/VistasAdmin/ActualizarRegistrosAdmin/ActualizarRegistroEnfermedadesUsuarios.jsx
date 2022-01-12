import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { LISTADO } from '../../../redux/types';
import { EDITANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';

const ActualizarRegistroEnfermedadesUsuarios = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    // TAMAÑO DE VENTANA DE CREACION DE REGISTRO NUEVO
    const[tamañoVentana, setTamañoVentana] = useState(undefined);
    // ESTILO QUE SE DARÁ A LA VENTA DE CREACIÓN DE REGISTRO
    const[estilo, setEstilo] = useState({});
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        colocarTop();
    },[])
    
    //EDITA LA ALTURA DEL COMPONENTE PARA QUE APAREZCA CENTRADO
    const colocarTop = () => {
        let ventana = document.getElementsByClassName('editar_registro')[0];
        let height = ventana.offsetHeight;
        //SOLO SE RENDERIZA 2 VECES: LA PRIMERA VEZ LO HACE NORMAL Y LA SEGUNDA VEZ LO HACE CON LA ALTURA MODIFICADA
        if (height !== tamañoVentana) {
            setTamañoVentana(height);
            setEstilo({top: `calc(50vh - ${ventana?.offsetHeight / 2}px`});
        }
    }

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
            UsuarioID: props.registroSeleccionado.registro.UsuarioID,
            EnfermedadID: props.registroSeleccionado.registro.EnfermedadID
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
            <div className='editar_registro' style={estilo}>
                <h2 className='mb'>Modificar registro</h2>
                <div className='flex_fila_muy_separado mb'>
                    <div className="label_registro_admin flex_columna_izquierda mi">
                        <label htmlFor="UsuarioID">ID de usuario:</label>
                        <label htmlFor="EnfermedadID">ID de enfermedad:</label>
                    </div>
                    <div className="input_registro_admin flex_columna_izquierda">
                        <input type="text" name="UsuarioID" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.UsuarioID}/>
                        <input type="text" name="EnfermedadID" onChange={(e)=>datosActualizarRegistro(e)} value={props.registroSeleccionado.registro.EnfermedadID}/>
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
    registroSeleccionado: state.registroSeleccionado
}))(ActualizarRegistroEnfermedadesUsuarios);