import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { useEffect } from 'react';
import { LISTADO } from '../../../redux/types';
import { CREANDO } from '../../../redux/types';

const NuevoRegistroAntecedentesFamiliares = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //GUARDA DATOS DE REGISTRO NUEVO
    const[nuevoRegistro, setNuevoRegistro] = useState({
        descripcion: "",
        UsuarioID: ""
    });
    // TAMAÑO DE VENTANA DE CREACION DE REGISTRO NUEVO
    const[tamañoVentana, setTamañoVentana] = useState(undefined);
    // ESTILO QUE SE DARÁ A LA VENTA DE CREACIÓN DE REGISTRO
    const[estilo, setEstilo] = useState({});
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        traerListado();
        colocarTop();
    },[])
    
    //EDITA LA ALTURA DEL COMPONENTE PARA QUE APAREZCA CENTRADO
    const colocarTop = () => {
        let ventana = document.getElementsByClassName('crear_registro')[0];
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
    
    //CERRAR VENTANA PARA CREAR REGISTRO NUEVO
    const cerrarCreando = () => {
        props.dispatch({type:CREANDO, payload: false});
    }

    //CREAR REGISTRO EN LA BASE DE DATOS
    const crearRegistro = async () =>{
        let body = {
            descripcion: nuevoRegistro.descripcion,
            UsuarioID: nuevoRegistro.UsuarioID
        };
        try {
            await axios.post(`${api.conexion}/${props.vista}/`, body, props.config);
            props.dispatch({type:CREANDO, payload: false});
            traerListado();
        } catch (error) {
            setMensajeError(error);
        }
    }

    //GUARDAR DATOS PARA CREAR REGISTRO NUEVO
    const datosCrearRegistro = (e) =>{
        setNuevoRegistro({...nuevoRegistro, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <div className='contenedor_mensaje'></div>
            <div className='crear_registro' style={estilo}>
                <h2 className='mb'>Crear registro</h2>
                <div className='flex_fila_muy_separado mb'>
                    <div className="label_registro_admin flex_columna_izquierda mi">
                        <label htmlFor="UsuarioID">ID del usuario:</label>
                        <label htmlFor="descripcion">Descripción:</label>
                    </div>
                    <div className="input_registro_admin flex_columna_izquierda">
                        <input type="text" name="UsuarioID" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="descripcion" onChange={(e)=>datosCrearRegistro(e)}/>
                    </div>
                </div>
                <div className="botones_borrado flex_fila_separado">
                    <div className="boton" onClick={()=>crearRegistro()}>Crear nuevo registro</div>
                    <div className="boton" onClick={()=>cerrarCreando()}>Cerrar este mensaje</div>
                </div>
            </div>
        </div>
    )
}
export default connect()(NuevoRegistroAntecedentesFamiliares);