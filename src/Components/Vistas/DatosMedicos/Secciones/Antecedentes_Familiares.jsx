import React from 'react';
import '../DatosMedicos.scss';
import { connect } from 'react-redux';
import Api from '../../../../api/api';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Antecedentes_Familiares = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //ANTECEDENTES FAMILIARES DEL USUARIO
    const[antecedentes, setAntecedentes] = useState("");
    //MODIFICACIÓN DE ANTECEDENTES FAMILIARES DEL USUARIO
    const[antecedentesModificados, setAntecedentesModificados] = useState("");
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        antecedentesFamiliares();
    }, []);

    //CADA VEZ QUE SE MODIFICAN LOS ANTECEDENTES FAMILIARES, SE GUARDA UNA COPIA EN EL HOOK
    useEffect(()=>{
        setAntecedentesModificados(antecedentes);
    },[antecedentes]);

    //ANTECEDENTES FAMILIARES

    //OBTENER ANTECEDENTES FAMILIARES
    const antecedentesFamiliares = async() =>{
        try {
            let res = await axios.get(`${api.conexion}/antecedentes_familiares/usuario/${props.usuarioSeleccionado.usuario.id}`, props.config);
            setAntecedentes(res.data[0]?.descripcion);
            console.log(antecedentes)
        } catch (error) {
            setMensajeError(error);
        }
    }

    //GUARDAR MODIFICACIONES EN LOS ANTECEDENTES FAMILIARES
    const guardarModificacionAntecedentes = (e) =>{
        setAntecedentesModificados(e.target.value);
    }

    //GUARDAR LAS MODIFICACIONES DE LOS ANTECEDENTES EN LA BASE DE DATOS
    const actualizarAntecedentesUsuario = async () =>{
        let body = {
            descripcion: antecedentesModificados
        }
        try {
            await axios.put(`${api.conexion}/antecedentes_familiares/${props.usuarioSeleccionado.usuario.id}`, body, props.config);
            setMensajeError("Actualización de datos realizada con éxito.");
            setTimeout(() => {
                setMensajeError("");
            }, 4000);

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
            <h2>Antecedentes familiares</h2>
            {/* SOLO SE VERÁ EL BOTÓN SI SE HA LOGADO ADMINISTRACIÓN */}
            {props.profesionalLogado.login.profesional.rol === "Administración"
            ?
            <textarea className='bloque_multiples_datos_medicos mi' value={antecedentesModificados} onChange={(e)=>guardarModificacionAntecedentes(e)}>
            </textarea>
            :
            <div className='bloque_multiples_datos_medicos mi'>
                {antecedentes}
            </div>
            }
            {/* SOLO SE VERÁ EL BOTÓN SI SE HA LOGADO ADMINISTRACIÓN */}
            {props.profesionalLogado.login.profesional.rol === "Administración"
            ?
            <div className="flex_columna ma">
                <div className="boton" onClick={()=>actualizarAntecedentesUsuario()}>GUARDAR DATOS DE ANTECEDENTES FAMILIARES MODIFICADOS</div>
            </div>
            :
            null
            }
            <hr />
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(Antecedentes_Familiares);