import React from 'react';
import '../DatosMedicos.scss';
import { connect } from 'react-redux';
import Api from '../../../../api/api';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const DatosMedicos = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //ENFERMEDADES DEL USUARIO
    const[enfermedadesUsuario, setEnfermedadesUsuario] = useState([]);
    //MOSTRAR LISTADO DE ENFERMEDADES PARA AÑADIR
    const[añadiendoEnfermedades, setAñadiendoEnfermedades] = useState(false);
    //MOSTRAR LISTADO DE ENFERMEDADES PARA ELIMINAR
    const[eliminandoEnfermedades, setEliminandoEnfermedades] = useState(false);
    //LISTADO DE ENFERMEDADES
    const[listadoEnfermedades, setListadoEnfermedades] = useState([]);
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        enfermedades();
        obtenerEnfermedades();
    }, []);

    //OBTENER ENFERMEDADES DEL USUARIO
    const enfermedades = async() =>{
        try {
            let res = await axios.get(`${api.conexion}/enfermedades_usuarios/usuario/${props.usuarioSeleccionado.usuario.id}`, props.config);
            setEnfermedadesUsuario(res.data);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //MOSTRAR MENU PARA AÑADIR ENFERMEDADES
    const mostrarAñadirEnfermedades = () =>{
        setAñadiendoEnfermedades(true);
    }
    
    //CERRAR MENU PARA AÑADIR ENFERMEDADES
    const ocultarAñadirEnfermedades = () =>{
        setAñadiendoEnfermedades(false);
    }

    //MOSTRAR MENU PARA ELIMINAR ENFERMEDADES
    const mostrarEliminarEnfermedades = () =>{
        setEliminandoEnfermedades(true);
    }
    
    //CERRAR MENU PARA ELIMINAR ENFERMEDADES
    const ocultarEliminarEnfermedades = () =>{
        setEliminandoEnfermedades(false);
    }

    //OBTENER TODAS LAS ENFERMEDADES GUARDADAS EN LA BASE DE DATOS
    const obtenerEnfermedades = async () =>{
        try {
            let res = await axios.get(`${api.conexion}/enfermedades`, props.config);
            setListadoEnfermedades(res.data);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //AÑADIR ENFERMEDAD
    const añadirEnfermedad = async (id, e) =>{
        e.target.classList.add("añadida");
        let body = {
            UsuarioID: props.usuarioSeleccionado.usuario.id,
            EnfermedadID: id
        }
        try {
            await axios.post(`${api.conexion}/enfermedades_usuarios`, body, props.config);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //ELIMINAR ENFERMEDAD
    const eliminarEnfermedad = async (id, e) =>{
        e.target.classList.add("añadida");
        try {
            await axios.delete(`${api.conexion}/enfermedades_usuarios/${id}`, props.config);
        } catch (error) {
            setMensajeError(error);
        }
    }

    return(
        <div>
            {/* SI mensajeError ESTÁ VACIO NO MUESTRA NADA. SI TIENE ALGO, MUESTRA EL MENSAJE */}
            {!mensajeError
            ?
            null
            :
            <div className="mensaje_error">{mensajeError}</div>
            }
            {/* VENTANA QUE SE MOSTRARÁ CUANDO SE QUIERA AÑADIR ENFERMEDADES */}
            {añadiendoEnfermedades
            ?
            <div>
                <div className='contenedor_mensaje'></div>
                <div className='ventana_añadir_enfermedad flex_columna_arriba'>
                    <h2>Añadir enfermedad al usuario</h2>
                    <div className='listado_enfermedades_añadir'>
                    {listadoEnfermedades.map((enfermedad)=>{
                        return(
                            <div key={enfermedad.id} className='enfermedad_individual' onClick={(e)=>añadirEnfermedad(enfermedad.id, e)}>
                                {enfermedad.nombre}
                            </div>
                        )
                    })}
                    </div>
                    <div className="flex_fila ma">
                        <div className="boton" onClick={()=>ocultarAñadirEnfermedades()}>Cerrar este mensaje</div>
                    </div>
                </div>
            </div>
            :
            null
            }
            {/* VENTANA QUE SE MOSTRARÁ CUANDO SE QUIERA ELIMINAR ENFERMEDADES */}
            {eliminandoEnfermedades
            ?
            <div>
                <div className='contenedor_mensaje'></div>
                <div className='ventana_añadir_enfermedad flex_columna_arriba'>
                    <h2>Eliminar enfermedad al usuario</h2>
                    <div className='listado_enfermedades_añadir'>
                    {enfermedadesUsuario.map((enfermedad)=>{
                        return(
                            <div key={enfermedad.id} className='enfermedad_individual' onClick={(e)=>eliminarEnfermedad(enfermedad.id, e)}>
                                {enfermedad.enfermedade.nombre}
                            </div>
                        )
                    })}
                    </div>
                    <div className="flex_fila ma">
                        <div className="boton" onClick={()=>ocultarEliminarEnfermedades()}>Cerrar este mensaje</div>
                    </div>
                </div>
            </div>
            :
            null}
            <h2>Enfermedades</h2>
            <div className='bloque_multiples_datos_medicos mi'>
                {enfermedadesUsuario.map((enfermedad)=>{
                    return(
                        <div key={enfermedad.id}>{enfermedad.enfermedade.nombre}</div>
                    )
                })}
            </div>
            <div className="flex_fila_separado ma">
                <div className="boton" onClick={()=>mostrarAñadirEnfermedades()}>AÑADIR ENFERMEDAD</div>
                <div className="boton" onClick={()=>mostrarEliminarEnfermedades()}>ELIMINAR ENFERMEDAD</div>
            </div>
            <hr />
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(DatosMedicos);