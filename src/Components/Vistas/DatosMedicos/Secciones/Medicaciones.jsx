import React from 'react';
import '../DatosMedicos.scss';
import { connect } from 'react-redux';
import Api from '../../../../api/api';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { USUARIO } from '../../../../redux/types';

const Medicaciones = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //MEDICACIONES DEL USUARIO
    const[medicacionesUsuario, setMedicacionesUsuario] = useState([]);
    //MOSTRAR LISTADO DE MEDICACIONES PARA AÑADIR
    const[añadiendoMedicaciones, setAñadiendoMedicaciones] = useState(false);
    //MOSTRAR LISTADO DE MEDICACIONES PARA ELIMINAR
    const[eliminandoMedicaciones, setEliminandoMedicaciones] = useState(false);
    //LISTADO DE MEDICACIONES
    const[listadoMedicaciones, setListadoMedicaciones] = useState([]);
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        medicaciones();
        obtenerMedicaciones();
    }, []);
    
    useEffect(()=>{
        medicaciones();
    }, [props.usuarioSeleccionado]);

    //OBTENER MEDICACIONES
    const medicaciones = async() =>{
        try {
            let res = await axios.get(`${api.conexion}/medicaciones_usuarios/usuario/${props.usuarioSeleccionado.usuario.id}`, props.config);
            setMedicacionesUsuario(res.data);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //MOSTRAR MENU PARA AÑADIR MEDICACIONES
    const mostrarAñadirMedicaciones = () =>{
        setAñadiendoMedicaciones(true);
    }
    
    //CERRAR MENU PARA AÑADIR MEDICACIONES
    const ocultarAñadirMedicaciones = async () =>{
        try {
            let res = await axios.get(`${api.conexion}/usuarios/${props.usuarioSeleccionado.usuario.id}`, props.config);
            props.dispatch({type:USUARIO, payload: res.data});
            setAñadiendoMedicaciones(false);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //MOSTRAR MENU PARA ELIMINAR MEDICACIONES
    const mostrarEliminarMedicaciones = () =>{
        setEliminandoMedicaciones(true);
    }
    
    //CERRAR MENU PARA ELIMINAR MEDICACIONES
    const ocultarEliminarMedicaciones = async () =>{
        try {
            let res = await axios.get(`${api.conexion}/usuarios/${props.usuarioSeleccionado.usuario.id}`, props.config);
            props.dispatch({type:USUARIO, payload: res.data});
            setEliminandoMedicaciones(false);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //OBTENER TODAS LAS MEDICACIONES GUARDADAS EN LA BASE DE DATOS
    const obtenerMedicaciones = async () =>{
        try {
            let res = await axios.get(`${api.conexion}/medicaciones`, props.config);
            setListadoMedicaciones(res.data);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //AÑADIR MEDICACIÓN
    const añadirMedicacion = async (id, e) =>{
        e.target.classList.add("añadida");
        let body = {
            UsuarioID: props.usuarioSeleccionado.usuario.id,
            MedicacionID: id
        }
        try {
            await axios.post(`${api.conexion}/medicaciones_usuarios`, body, props.config);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //ELIMINAR MEDICACIÓN
    const eliminarMedicacion = async (id, e) =>{
        e.target.classList.add("añadida");
        try {
            await axios.delete(`${api.conexion}/medicaciones_usuarios/${id}`, props.config);
        } catch (error) {
            setMensajeError(error);
        }
    }

    return(
        <div>
            {/* VENTANA QUE SE MOSTRARÁ CUANDO SE QUIERA AÑADIR MEDICACIONES */}
            {añadiendoMedicaciones
            ?
            <div>
                <div className='contenedor_mensaje'></div>
                <div className='ventana_mensaje_datos_medicos flex_columna_arriba'>
                    <h2>Añadir enfermedad al usuario</h2>
                    <div className='listado_datos_medicos'>
                    {listadoMedicaciones.map((medicacion)=>{
                        return(
                            <div key={medicacion.id} className='elemento_individual_datos_medicos' onClick={(e)=>añadirMedicacion(medicacion.id, e)}>
                                {medicacion.nombre}
                            </div>
                        )
                    })}
                    </div>
                    <div className="flex_fila ma">
                        <div className="boton" onClick={()=>ocultarAñadirMedicaciones()}>Cerrar este mensaje</div>
                    </div>
                </div>
            </div>
            :
            null
            }
            {/* VENTANA QUE SE MOSTRARÁ CUANDO SE QUIERA ELIMINAR MEDICACIONES */}
            {eliminandoMedicaciones
            ?
            <div>
                <div className='contenedor_mensaje'></div>
                <div className='ventana_mensaje_datos_medicos flex_columna_arriba'>
                    <h2>Eliminar medicación al usuario</h2>
                    <div className='listado_datos_medicos'>
                    {medicacionesUsuario.map((medicacion)=>{
                        return(
                            <div key={medicacion.id} className='elemento_individual_datos_medicos' onClick={(e)=>eliminarMedicacion(medicacion.id, e)}>
                                {medicacion.medicacione.nombre}
                            </div>
                        )
                    })}
                    </div>
                    <div className="flex_fila ma">
                        <div className="boton" onClick={()=>ocultarEliminarMedicaciones()}>Cerrar este mensaje</div>
                    </div>
                </div>
            </div>
            :
            null
            }
            <h2>Medicación actual</h2>
            <div className='bloque_multiples_datos_medicos mi'>
                {medicacionesUsuario.map((medicacion)=>{
                    return(
                        <div key={medicacion.id}>{medicacion.medicacione.nombre}</div>
                    )
                })}
            </div>
            {/*SOLO SE MOSTRARÁN LOS BOTONES PARA LOS PROFESIONALES QUE SEAN DE ADMINISTRACION*/}
            {props.profesionalLogado.login.profesional.rol ==="Administración"
            ?
            <div className="flex_fila_separado ma mb">
                <div className="boton" onClick={()=>mostrarAñadirMedicaciones()}>AÑADIR MEDICACIÓN</div>
                <div className="boton" onClick={()=>mostrarEliminarMedicaciones()}>ELIMINAR MEDICACIÓN</div>
            </div>
            :
            null
            }
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(Medicaciones);