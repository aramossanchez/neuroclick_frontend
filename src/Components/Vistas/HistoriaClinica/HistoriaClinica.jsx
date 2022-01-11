import React from 'react';
import './HistoriaClinica.scss';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Api from '../../../api/api';
import { USUARIO } from '../../../redux/types';

const HistoriaClinica = (props) =>{
    
    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //DATOS DE USUARIO A MODIFICAR
    const[usuarioModificado, setUsuarioModificado] = useState({});
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    //CADA VEZ QUE SE SELECCIONA UN USUARIO, SE GUARDA ESA INFORMACIÓN EN EL HOOK Y SE CARGA EL COMPONENTE DE NUEVO
    useEffect(()=>{
        setUsuarioModificado(props.usuarioSeleccionado.usuario);
    },[props.usuarioSeleccionado]);

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //GUARDAR DATOS MODIFICADOS DEL USUARIO
    const datosActualizarUsuario = (e) =>{
        setUsuarioModificado({...usuarioModificado, [e.target.name]: e.target.value})
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
        <div className='contenedor_historia_clinica contenedor_vista flex_columna_arriba_izquierda'>
            {/* SI mensajeError ESTÁ VACIO NO MUESTRA NADA. SI TIENE ALGO, MUESTRA EL MENSAJE */}
            {!mensajeError
            ?
            null
            :
            <div className="mensaje_error">{mensajeError}</div>
            }
            <h2>Datos personales</h2>
            <div className='bloques_historia_clinica flex_fila_muy_separado'>
                <div className="label_historia_clinica_datos flex_columna_izquierda mi">
                    <label htmlFor="nombre">Nombre:</label>
                    <label htmlFor="apellidos">Apellidos:</label>
                    <label htmlFor="direccion">Dirección:</label>
                    <label htmlFor="telefono_usuario">Teléfono:</label>
                </div>
                {/* SI SE HA LOGADO ALGUIEN DE ADMINISTRACIÓN, PODRÁ EDITAR LOS CAMPOS INPUT */}
                {props.profesionalLogado.login.profesional.rol === "Administración"
                ?
                <div className="input_historia_clinica_datos flex_columna_izquierda">
                    <input type="text" name="nombre" onChange={(e)=>datosActualizarUsuario(e)} value={usuarioModificado?.nombre}/>
                    <input type="text" name="apellidos" onChange={(e)=>datosActualizarUsuario(e)} value={usuarioModificado?.apellidos}/>
                    <input type="text" name="direccion" onChange={(e)=>datosActualizarUsuario(e)} value={usuarioModificado?.direccion}/>
                    <input type="text" name="telefono_usuario" onChange={(e)=>datosActualizarUsuario(e)} value={usuarioModificado?.telefono_usuario}/>
                </div>
                :
                <div className="input_historia_clinica_datos flex_columna_izquierda">
                    <input type="text" name="nombre" readOnly value={usuarioModificado?.nombre}/>
                    <input type="text" name="apellidos" readOnly value={usuarioModificado?.apellidos}/>
                    <input type="text" name="direccion" readOnly value={usuarioModificado?.direccion}/>
                    <input type="text" name="telefono_usuario" readOnly value={usuarioModificado?.telefono_usuario}/>
                </div>
                }
            </div>
            <hr />
            <h2>Social</h2>
            <div className='bloques_historia_clinica flex_fila_muy_separado'>
                <div className="label_historia_clinica_social flex_columna_izquierda mi">
                    <label htmlFor="pension">Pensión:</label>
                    <label htmlFor="persona_contacto">Persona de contacto:</label>
                    <label htmlFor="telefono_contacto">Teléfono de persona de contacto:</label>
                </div>
                {props.profesionalLogado.login.profesional.rol === "Administración"
                ?
                <div className="input_historia_clinica_social flex_columna_izquierda">
                    <input type="text" name="pension" onChange={(e)=>datosActualizarUsuario(e)} value={usuarioModificado?.pension}/>
                    <input type="text" name="persona_contacto" onChange={(e)=>datosActualizarUsuario(e)} value={usuarioModificado?.persona_contacto}/>
                    <input type="text" name="telefono_contacto" onChange={(e)=>datosActualizarUsuario(e)} value={usuarioModificado?.telefono_contacto}/>
                </div>
                :
                <div className="input_historia_clinica_social flex_columna_izquierda">
                    <input type="text" name="pension" readOnly value={usuarioModificado?.pension}/>
                    <input type="text" name="persona_contacto" readOnly value={usuarioModificado?.persona_contacto}/>
                    <input type="text" name="telefono_contacto" readOnly value={usuarioModificado?.telefono_contacto}/>
                </div>
                }
            </div>
            {/* SOLO SE VERÁ EL BOTÓN SI SE HA LOGADO ADMINISTRACIÓN */}
            {props.profesionalLogado.login.profesional.rol === "Administración"
            ?
            <div className="flex_columna ma">
                <div className="boton" onClick={()=>actualizarDatosUsuario()}>GUARDAR DATOS MODIFICADOS</div>
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
}))(HistoriaClinica);