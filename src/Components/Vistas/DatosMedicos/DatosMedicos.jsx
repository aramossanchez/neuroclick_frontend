import React from 'react';
import './DatosMedicos.scss';
import { connect } from 'react-redux';
import Api from '../../../api/api';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { USUARIO } from '../../../redux/types';
import Antecedentes_Familiares from './Secciones/Antecedentes_Familiares';
import Enfermedades from './Secciones/Enfermedades';

const DatosMedicos = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //DATOS DE USUARIO A MODIFICAR
    const[usuarioModificado, setUsuarioModificado] = useState({});
    //MEDICACIONES DEL USUARIO
    const[medicacionesUsuario, setMedicacionesUsuario] = useState([]);
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        medicaciones();
    }, []);

    //CADA VEZ QUE SE SELECCIONA UN USUARIO, SE GUARDA ESA INFORMACIÓN EN EL HOOK Y SE CARGA EL COMPONENTE DE NUEVO
    useEffect(()=>{
        setUsuarioModificado(props.usuarioSeleccionado.usuario);
    },[props.usuarioSeleccionado]);

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //CÁLCULO DE EDAD DEL USUARIO
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear()
    let fechaDeNacimiento = new Date(props.usuarioSeleccionado.usuario.fecha_nacimiento);
    let añoNacimiento = fechaDeNacimiento.getFullYear();

    //MEDICACIONES

    //OBTENER MEDICACIONES
    const medicaciones = async() =>{
        try {
            let res = await axios.get(`${api.conexion}/medicaciones_usuarios/usuario/${props.usuarioSeleccionado.usuario.id}`, config);
            setMedicacionesUsuario(res.data);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //GUARDAR DATOS MODIFICADOS DEL USUARIO
    const datosActualizarUsuario = (e) =>{
        setUsuarioModificado({...usuarioModificado, [e.target.name]: e.target.value});
    }

    //GUARDAR LAS MODIFICACIONES EN LA BASE DE DATOS
    const actualizarDatosUsuario = async () =>{
        try {
            await axios.put(`${api.conexion}/usuarios/${usuarioModificado.id}`, usuarioModificado, config);
            await props.dispatch({type:USUARIO, payload: usuarioModificado});
            setMensajeError("Actualización de datos realizada con éxito.");
            setTimeout(() => {
                setMensajeError("");
            }, 4000);

        } catch (error) {
            setMensajeError(error);
        }
    }

    return(
        <div className='contenedor_datos_medicos contenedor_vista flex_columna_arriba_izquierda'>
            {/* SI mensajeError ESTÁ VACIO NO MUESTRA NADA. SI TIENE ALGO, MUESTRA EL MENSAJE */}
            {!mensajeError
            ?
            null
            :
            <div className="mensaje_error">{mensajeError}</div>
            }
            <h2>Datos médicos</h2>
            {/* SI SE HA LOGADO ALGUIEN DE ADMINISTRACIÓN, PODRÁ EDITAR LOS CAMPOS INPUT */}
            {props.profesionalLogado.login.profesional.rol === "Administración"
            ?
            <div className="datos_medicos_usuario flex_fila_izquierda mi">
                <label htmlFor="edad">Edad:</label>
                <input type="email" name="edad" readOnly value={añoActual - añoNacimiento}/>
                <label htmlFor="peso">Peso:</label>
                <input type="email" name="peso" onChange={(e)=>datosActualizarUsuario(e)} value={usuarioModificado?.peso}/>
                <label htmlFor="estatura">Estatura:</label>
                <input type="email" name="estatura" onChange={(e)=>datosActualizarUsuario(e)} value={usuarioModificado?.estatura}/>
            </div>
            :
            <div className="datos_medicos_usuario flex_fila_izquierda mi">
                <label htmlFor="edad">Edad:</label>
                <input type="email" name="edad" readOnly value={añoActual - añoNacimiento}/>
                <label htmlFor="peso">Peso:</label>
                <input type="email" name="peso" readOnly value={props.usuarioSeleccionado.usuario.peso}/>
                <label htmlFor="estatura">Estatura:</label>
                <input type="email" name="estatura" readOnly value={props.usuarioSeleccionado.usuario.estatura}/>
            </div>
            }
            {/* SOLO SE VERÁ EL BOTÓN SI SE HA LOGADO ADMINISTRACIÓN */}
            {props.profesionalLogado.login.profesional.rol === "Administración"
            ?
            <div className="flex_columna ma">
                <div className="boton" onClick={()=>actualizarDatosUsuario()}>GUARDAR DATOS DE USUARIO MODIFICADOS</div>
            </div>
            :
            null
            }
            <hr />
            <Antecedentes_Familiares config={config}/>
            <Enfermedades config={config}/>
            <h2>Medicación actual</h2>
            <div className='bloque_multiples_datos_medicos mi'>
                {medicacionesUsuario.map((medicacion)=>{
                    return(
                        <div key={medicacion.id}>{medicacion.medicacione.nombre}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(DatosMedicos);