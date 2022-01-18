import React from 'react';
import './Seguimientos.scss';
import Api from '../../../api/api';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import spin from '../../../img/spin.gif';
import axios from 'axios';

const Seguimientos = (props) =>{
    
    //GUARDA URL DE LA API
    let api = new Api();

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //HOOKS
    //SEGUIMIENTOS DE USUARIO
    const[listaSeguimientos, setListaSeguimientos] = useState([]);
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        traerListadoSeguimientos()
    },[])

    //TRAE LISTADO COMPLETO DE SEGUIMIENTOS DEL USUARIO SELECCIONADO
    const traerListadoSeguimientos = async () =>{
        try {
            let res = await axios.get(`${api.conexion}/seguimientos/usuario/${props.usuarioSeleccionado.usuario.id}`, config)
            setListaSeguimientos(res.data);
        } catch (error) {
            
        }
    }

    //FORMATEA LA FECHA
    const editarFecha = (fecha) =>{
        let f = new Date(fecha);
        return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    }

    return(
        <div className='contenedor_seguimientos contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Seguimientos</h2>
            <h3>Histórico de seguimientos</h3>
            <div className="columnas_seguimientos flex_fila_separado">
                <div className='columna_individual_seguimiento_corto'>Fecha</div>
                <div className='columna_individual_seguimiento_corto'>Profesional</div>
                <div className='columna_individual_seguimiento_largo'>Seguimiento</div>
            </div>
            <div className="total_seguimientos">
                {listaSeguimientos.map((seguimiento)=>{
                    return(
                        <div className="seguimiento_individual flex_fila_arriba_separado_wrap">
                            <div className='seguimiento_individual_corto'>{editarFecha(seguimiento.createdAt)}</div>
                            <div className='seguimiento_individual_corto'>{seguimiento.profesionale.rol}</div>
                            <div className='seguimiento_individual_largo'>{seguimiento.descripcion}</div>
                        </div>
                    )
                })}
                
            </div>
            <hr />
            <h3>Nuevo seguimiento</h3>
            <textarea></textarea>
            <div className='flex_columna'>
                <div className="boton">GUARDAR SEGUIMIENTO</div>
            </div>
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(Seguimientos);