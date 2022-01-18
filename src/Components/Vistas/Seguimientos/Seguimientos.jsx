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
    //SEGUIMIENTO NUEVO
    const[seguimientoNuevo, setSeguimientoNuevo] = useState("");
    //CARGANDO SEGUIMIENTOS
    const[cargandoSeguimientos, setCargandoSeguimientos] = useState(false);
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        traerListadoSeguimientos()
    },[])

    //TRAE LISTADO COMPLETO DE SEGUIMIENTOS DEL USUARIO SELECCIONADO
    const traerListadoSeguimientos = async () =>{
        try {
            setCargandoSeguimientos(true);
            let res = await axios.get(`${api.conexion}/seguimientos/usuario/${props.usuarioSeleccionado.usuario.id}`, config)
            setListaSeguimientos(res.data);
            setCargandoSeguimientos(false);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //GUARDAR EN HOOK EL SEGUIMIENTO QUE SE ESTÁ ESCRIBIENDO
    const guardarSeguimiento = (e) =>{
        setSeguimientoNuevo(e.target.value);
    }

    //CREAR REGISTRO NUEVO DE SEGUIMIENTO
    const crearSeguimiento = async () =>{
        let body = {
            descripcion: seguimientoNuevo,
            UsuarioID: props.usuarioSeleccionado.usuario.id,
            ProfesionalID: props.profesionalLogado.login.profesional.id
        }
        console.log(body)
        try {
            await axios.post(`${api.conexion}/seguimientos`, body, config);
            traerListadoSeguimientos();
            setSeguimientoNuevo("");
            setMensajeError("Seguimiento guardado con éxito.");
            setTimeout(() => {
                setMensajeError("");
            }, 4000);
        } catch (error) {
            setMensajeError(error)
        }
    }

    //FORMATEA LA FECHA
    const editarFecha = (fecha) =>{
        let f = new Date(fecha);
        return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    }

    return(
        <div className='contenedor_seguimientos contenedor_vista flex_columna_arriba_izquierda'>
            {/* SI mensajeError ESTÁ VACIO NO MUESTRA NADA. SI TIENE ALGO, MUESTRA EL MENSAJE */}
            {!mensajeError
            ?
            null
            :
            <div className="mensaje_error">{mensajeError}</div>
            }
            <h2>Seguimientos</h2>
            <h3>Histórico de seguimientos</h3>
            <div className="columnas_seguimientos flex_fila_separado">
                <div className='columna_individual_seguimiento_corto'>Fecha</div>
                <div className='columna_individual_seguimiento_corto'>Profesional</div>
                <div className='columna_individual_seguimiento_largo'>Seguimiento</div>
            </div>
            <div className="total_seguimientos">
                {cargandoSeguimientos
                ?
                <img src={spin} alt="Cargando" />
                :
                null
                }
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
            <textarea onChange={(e)=>guardarSeguimiento(e)} value={seguimientoNuevo}></textarea>
            <div className='flex_columna'>
                <div className="boton" onClick={()=>crearSeguimiento()}>GUARDAR SEGUIMIENTO</div>
            </div>
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(Seguimientos);