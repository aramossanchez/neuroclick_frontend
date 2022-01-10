import React from 'react';
import './Vista_individual_admin.scss';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { useEffect } from 'react';
import { LISTADO } from '../../../redux/types';
import { EDITANDO } from '../../../redux/types';
import { BORRANDO } from '../../../redux/types';
import { REGISTRO } from '../../../redux/types';
import Listado_profesionales from '../Profesionales_admin/Listado_profesionales';
import Actualizar_registro_profesionales from '../Profesionales_admin/Actualizar_registro_profesionales';

const Vista_individual_admin = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //GUARDA SI SE ESTÁ INTENTANDO CREAR UN REGISTRO
    const[creando, setCreando] = useState(false);
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
    //GUARDA EL REGISTRO SELECCIONADO
    const[registroSeleccionado, setRegistroSeleccionado] = useState({});
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        traerListado()
    },[])

    //TRAER LISTADO COMPLETO
    const traerListado = async () =>{
        try {
            let res = await axios.get(`${api.conexion}/${props.vista}`, props.config);
            props.dispatch({type:LISTADO, payload: res.data});
        } catch (error) {
            setMensajeError(error);
        }
    }

    //NUEVO REGISTRO

    //APARECE VENTANA DONDE CREAR REGISTRO NUEVO
    const mostrarCreacion = () => {
        setCreando(true);
    }
    
    //CERRAR VENTANA PARA CREAR REGISTRO NUEVO
    const cerrarCreando = () => {
        setCreando(false);
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
            console.log(body)
            await axios.post(`${api.conexion}/${props.vista}/`, body, props.config);
            setCreando(false);
            traerListado();
        } catch (error) {
            setMensajeError(error);
        }
    }

    //GUARDAR DATOS PARA CREAR REGISTRO NUEVO
    const datosCrearRegistro = (e) =>{
        setNuevoRegistro({...nuevoRegistro, [e.target.name]: e.target.value})
    }

    //BORRAR REGISTRO
    
    //CERRAR MENSAJE QUE PREGUNTA POR BORRADO DE BASE DE DATOS
    const cerrarPreguntarBorrado = () => {
        props.dispatch({type:BORRANDO, payload: false});
    }

    //ELIMINAR REGISTRO DE LA BASE DE DATOS
    const borrarRegistro = async () =>{
        try {
            await axios.delete(`${api.conexion}/${props.vista}/${registroSeleccionado.id}`, props.config);
            props.dispatch({type:REGISTRO, payload: {}});
            props.dispatch({type:BORRANDO, payload: false});
            traerListado();
        } catch (error) {
            setMensajeError(error);
        }
    }

    return(
        <div className='contenedor_profesionales_admin contenedor_vista'>
            <div className='flex_fila_muy_separado mb '>
                <h2 className=''>Tabla de Profesionales</h2>
                <div className="boton nuevo_registro_boton" onClick={()=>mostrarCreacion()}>Nuevo registro</div>
            </div>
            {/* MENSAJE QUE APARECE AL INTENTAR CREAR UN REGISTRO */}
            {creando
            ?
            <div>
                <div className='contenedor_mensaje'></div>
                <div className='crear_registro'>
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
                            <label htmlFor="rol">Puesto:</label>
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
            :
            null}
            {/* MENSAJE QUE APARECE AL INTENTAR BORRAR UN REGISTRO */}
            {props.borrandoRegistro.borrando
            ?
            <div>
                <div className='contenedor_mensaje'></div>
                <div className='pregunta_borrado'>
                    <div className='mb'>¿Estás seguro que quieres eliminar este registro?</div>
                    <div className='mb'>{props.registroSeleccionado.registro.nombre} {props.registroSeleccionado.registro.apellidos}</div>
                    <div className="botones_borrado flex_fila_separado">
                        <div className="boton" onClick={()=>borrarRegistro()}>Borrar registro</div>
                        <div className="boton" onClick={()=>cerrarPreguntarBorrado()}>Cerrar este mensaje</div>
                    </div>
                </div>
            </div>
            :
            null}
            {/* MENSAJE QUE APARECE AL INTENTAR EDITAR UN REGISTRO */}
            {props.editandoRegistro.editando
            ?
            <Actualizar_registro_profesionales vista={props.vista} config={props.config}/>
            :
            null}
            <Listado_profesionales/>
        </div>
    )
}
export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    listadoCompleto: state.listadoCompleto,
    editandoRegistro: state.editandoRegistro,
    borrandoRegistro: state.borrandoRegistro,
    registroSeleccionado: state.registroSeleccionado
}))(Vista_individual_admin);