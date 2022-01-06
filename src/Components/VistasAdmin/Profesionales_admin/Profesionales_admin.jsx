import React from 'react';
import './Profesionales_admin.scss';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { useEffect } from 'react';

const Profesionales_admin = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //LISTADO COMPLETO DE LOS REGISTROS DE LA TABLA
    const[listado, setListado] = useState([]);
    //GUARDA SI SE ESTÁ INTENTANDO BORRAR UN USUARIO
    const[borrando, setBorrando] = useState(false);
    //GUARDA EL USUARIO SELECCIONADO
    const[usuarioSeleccionado, setUsuarioSeleccionado] = useState({});
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        traerListado()
    },[])

    //TRAER LISTADO COMPLETO
    const traerListado = async () =>{
        try {
            let res = await axios.get(`${api.conexion}/${props.vista}`, props.config);
            setListado(res.data);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //PREGUNTAR POR ELIMINACIÓN DE REGISTRO DE BASE DE DATOS
    const preguntarBorrado = (registro) => {
        setBorrando(true);
        setUsuarioSeleccionado(registro);
    }
    
    //CERRAR MENSAJE QUE PREGUNTA POR BORRADO DE BASE DE DATOS
    const cerrarPreguntarBorrado = () => {
        setBorrando(false)
    }

    //ELIMINAR REGISRO DE LA BASE DE DATOS

    return(
        <div className='contenedor_profesionales_admin contenedor_vista'>
            <h2>Tabla de Profesionales</h2>
            {borrando
            ?
            <div>
            <div className='contenedor_mensaje'></div>
            <div className='pregunta_borrado'>
                <div className='mb'>¿Estás seguro que quieres eliminar este usuario?</div>
                <div className='mb'>{usuarioSeleccionado.nombre} {usuarioSeleccionado.apellidos}</div>
                <div className="botones_borrado flex_fila_separado">
                    <div className="boton">Borrar usuario</div>
                    <div className="boton" onClick={()=>cerrarPreguntarBorrado()}>Cerrar este mensaje</div>
                </div>
            </div>
            </div>
            :
            null}
            <div className='tabla_nombres_columnas flex_fila_izquierda'>
                |<div className="nombre_columna">Nombre</div>|
                <div className="nombre_columna">Apellidos</div>|
                <div className="nombre_columna">Correo electrónico</div>|
                <div className="nombre_columna_largo">Dirección</div>|
                <div className="nombre_columna">Teléfono de contacto</div>|
                <div className="nombre_columna">Rol</div>|
                <div className="nombre_columna">Fecha de incorporación</div>|
            </div>
            {listado.map((registro)=>{
                return(
                    <div key={registro.id} className='registros_admin flex_fila_izquierda'>
                        <div className='icono_registro_individual'>📝</div>
                        <div className='icono_registro_individual' onClick={()=>preguntarBorrado(registro)}>❌</div>
                        |<div className="registro_individual">{registro.nombre}</div>|
                        <div className="registro_individual">{registro.apellidos}</div>|
                        <div className="registro_individual">{registro.correo_electronico}</div>|
                        <div className="registro_individual_largo">{registro.direccion}</div>|
                        <div className="registro_individual">{registro.telefono_contacto}</div>|
                        <div className="registro_individual">{registro.rol}</div>|
                        <div className="registro_individual">{registro.createdAt}</div>|
                    </div>
                )
            })}
        </div>
    )
}
export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado
}))(Profesionales_admin);