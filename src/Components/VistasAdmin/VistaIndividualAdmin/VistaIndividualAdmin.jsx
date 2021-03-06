import React from 'react';
import './VistaIndividualAdmin.scss';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { useEffect } from 'react';
import { LISTADO } from '../../../redux/types';
import { CREANDO } from '../../../redux/types';
import NuevosRegistrosAdmin from '../NuevosRegistrosAdmin/NuevosRegistrosAdmin';
import BorrandoRegistrosAdmin from '../BorrandoRegistrosAdmin/BorrandoRegistrosAdmin';
import ActualizarRegistrosAdmin from '../ActualizarRegistrosAdmin/ActualizarRegistrosAdmin';
import ListadosAdmin from '../ListadosAdmin/ListadosAdmin';

const VistaIndividualAdmin = (props) =>{

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
        <div className='contenedor_vista_individual_admin contenedor_vista_admin flex_columna_arriba_izquierda'>
            <div className='mb'>
                <h2>Tabla de {props.vista}</h2>
                <div className="boton nuevo_registro_boton" onClick={()=>mostrarCreacion()}>Nuevo registro</div>
            </div>
            {/* MENSAJE QUE APARECE AL INTENTAR CREAR UN REGISTRO */}
            {props.creandoRegistro.creando
            ?
            <NuevosRegistrosAdmin vista={props.vista} config={props.config}/>
            :
            null}
            {/* MENSAJE QUE APARECE AL INTENTAR BORRAR UN REGISTRO */}
            {props.borrandoRegistro.borrando
            ?
            <BorrandoRegistrosAdmin vista={props.vista} config={props.config}/>
            :
            null}
            {/* MENSAJE QUE APARECE AL INTENTAR EDITAR UN REGISTRO */}
            {props.editandoRegistro.editando
            ?
            <ActualizarRegistrosAdmin vista={props.vista} config={props.config}/>
            :
            null}
            <ListadosAdmin vista={props.vista}/>
        </div>
    )
}
export default connect((state)=>({
    creandoRegistro: state.creandoRegistro,
    editandoRegistro: state.editandoRegistro,
    borrandoRegistro: state.borrandoRegistro
}))(VistaIndividualAdmin);