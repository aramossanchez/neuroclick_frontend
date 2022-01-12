import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { useEffect } from 'react';
import { LISTADO } from '../../../redux/types';
import { CREANDO } from '../../../redux/types';

const NuevoRegistroProfesionales = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //GUARDA DATOS DE REGISTRO NUEVO
    const[nuevoRegistro, setNuevoRegistro] = useState({
        correo_electronico: "",
        clave_acceso: "",
        nombre: "",
        apellidos: "",
        calle: "",
        portal: "",
        piso: "",
        puerta: "",
        ciudad: "",
        provincia: "",
        codigopostal: "",
        telefono: "",
        rol: "",
    });
    // TAMAÑO DE VENTANA DE CREACION DE REGISTRO NUEVO
    const[tamañoVentana, setTamañoVentana] = useState(undefined);
    // ESTILO QUE SE DARÁ A LA VENTA DE CREACIÓN DE REGISTRO
    const[estilo, setEstilo] = useState({});
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        traerListado()
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
            correo_electronico: nuevoRegistro.correo_electronico,
            clave_acceso: nuevoRegistro.clave_acceso,
            nombre: nuevoRegistro.nombre,
            apellidos: nuevoRegistro.apellidos,
            direccion: "Calle " + nuevoRegistro.calle + ", " + "número " + nuevoRegistro.portal + ", " + "piso " + nuevoRegistro.piso + ", " + "puerta " + nuevoRegistro.puerta + ", " + nuevoRegistro.ciudad + ", " + nuevoRegistro.provincia + ", " + nuevoRegistro.codigopostal,
            telefono_contacto: nuevoRegistro.telefono,
            rol: nuevoRegistro.rol
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
                        <label htmlFor="correo_electronico">Correo electrónico:</label>
                        <label htmlFor="clave_acceso">Contraseña:</label>
                        <label htmlFor="nombre">Nombre:</label>
                        <label htmlFor="apellidos">Apellidos:</label>
                        <label htmlFor="calle">Calle:</label>
                        <label htmlFor="portal">Portal:</label>
                        <label htmlFor="piso">Piso:</label>
                        <label htmlFor="puerta">Puerta:</label>
                        <label htmlFor="ciudad">Población:</label>
                        <label htmlFor="provincia">Provincia:</label>
                        <label htmlFor="codigopostal">Codigo Postal:</label>
                        <label htmlFor="telefono">Teléfono:</label>
                        <label htmlFor="rol">Rol:</label>
                    </div>
                    <div className="input_registro_admin flex_columna_izquierda">
                        <input type="text" name="correo_electronico" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="clave_acceso" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="nombre" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="apellidos" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="calle" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="portal" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="piso" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="puerta" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="ciudad" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="provincia" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="codigopostal" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="telefono" onChange={(e)=>datosCrearRegistro(e)}/>
                        <input type="text" name="rol" onChange={(e)=>datosCrearRegistro(e)}/>
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
export default connect()(NuevoRegistroProfesionales);