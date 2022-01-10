import React from 'react';
import './Vista_individual_admin.scss';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { useEffect } from 'react';
import { LISTADO } from '../../../redux/types';
import { CREANDO } from '../../../redux/types';
import Nuevos_registros_admin from '../Nuevos_registros_admin/Nuevos_registros_admin';
import Borrando_registros_admin from '../Borrando_registros_admin/Borrando_registros_admin';
import Actualizar_registros_admin from '../Actualizar_registros_admin/Actualizar_registros_admin';
import Listados_admin from '../Listados_admin/Listados_admin';

const Vista_individual_admin = (props) =>{

    //HOOKS
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    //GUARDA URL DE LA API
    let api = new Api();

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

    //APARECE VENTANA DONDE CREAR REGISTRO NUEVO
    const mostrarCreacion = () => {
        props.dispatch({type:CREANDO, payload: true});
    }

    return(
        <div className='contenedor_vista_individual_admin contenedor_vista'>
            <div className='flex_fila_muy_separado mb '>
                <h2 className=''>Tabla de {props.vista}</h2>
                <div className="boton nuevo_registro_boton" onClick={()=>mostrarCreacion()}>Nuevo registro</div>
            </div>
            {/* MENSAJE QUE APARECE AL INTENTAR CREAR UN REGISTRO */}
            {props.creandoRegistro.creando
            ?
            <Nuevos_registros_admin vista={props.vista} config={props.config}/>
            :
            null}
            {/* MENSAJE QUE APARECE AL INTENTAR BORRAR UN REGISTRO */}
            {props.borrandoRegistro.borrando
            ?
            <Borrando_registros_admin vista={props.vista} config={props.config}/>
            :
            null}
            {/* MENSAJE QUE APARECE AL INTENTAR EDITAR UN REGISTRO */}
            {props.editandoRegistro.editando
            ?
            <Actualizar_registros_admin vista={props.vista} config={props.config}/>
            :
            null}
            <Listados_admin vista={props.vista}/>
        </div>
    )
}
export default connect((state)=>({
    creandoRegistro: state.creandoRegistro,
    editandoRegistro: state.editandoRegistro,
    borrandoRegistro: state.borrandoRegistro
}))(Vista_individual_admin);