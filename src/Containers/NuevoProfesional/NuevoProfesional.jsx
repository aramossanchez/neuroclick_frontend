import React, { useEffect, useState } from 'react';
import './NuevoProfesional.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Api from '../../api/api';
import { connect } from 'react-redux';

const NuevoProfesional = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    const navigate = useNavigate();

    //HOOKS
    const[datosRegistrarProfesional, setDatosRegistrarProfesional] = useState({
        correo_electronico: "",
        clave_acceso: "",
        nombre: "",
        apellidos: "",
        calle: "",
        portal: "",
        piso: "",
        puerta: "",
        ciudad: "",
        provincia: "",
        codigopostal: "",
        telefono: "",
        rol: "",
    });
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    //GUARDADO DE DATOS PARA LOGUEAR EN LA APLICACIÓN
    const datosRegistroProfesional = (e) =>{
        setDatosRegistrarProfesional({...datosRegistrarProfesional, [e.target.name]: e.target.value})
    }

    //VUELVE A LA PANTALLA PRINCIPAL DE LA APLICACIÓN
    const volver = () =>{
        navigate("/aplicacion");
    }

    //REGISTRA UN PROFESIONAL NUEVO EN LA BASE DE DATOS
    const registrarProfesional = async() =>{
        let body = {
            correo_electronico: datosRegistrarProfesional.correo_electronico,
            clave_acceso: datosRegistrarProfesional.clave_acceso,
            nombre: datosRegistrarProfesional.nombre,
            apellidos: datosRegistrarProfesional.apellidos,
            direccion: "Calle " + datosRegistrarProfesional.calle + ", " + "número " + datosRegistrarProfesional.portal + ", " + "piso " + datosRegistrarProfesional.piso + ", " + "puerta " + datosRegistrarProfesional.puerta + ", " + datosRegistrarProfesional.ciudad + ", " + datosRegistrarProfesional.provincia + ", " + datosRegistrarProfesional.codigopostal,
            telefono_contacto: datosRegistrarProfesional.telefono,
            rol: datosRegistrarProfesional.rol
        };
        try {
            await axios.post(`${api.conexion}/profesionales/`, body, config);            
            setDatosRegistrarProfesional(({}));            
            let inputs = document.getElementById("input_nuevo_profesional").childNodes
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
            setMensajeError("Nuevo profesional registrado correctamente");
            setTimeout(() => {
                volver();
            }, 2000);
        } catch (error) {
            setMensajeError(error);
            setTimeout(() => {
                setMensajeError("");
            }, 4000);
        }
    }

    return(
        <div className='contenedor_nuevo_profesional contenedor flex_columna_arriba'>
            <h2>NUEVO PROFESIONAL</h2>
             {/* SI mensajeError ESTÁ VACIO NO MUESTRA NADA. SI TIENE ALGO, MUESTRA EL MENSAJE */}
             {!mensajeError
            ?
            null
            :
            <div className="mensaje_error">{mensajeError}</div>    
            }
            <div className='bloque_rellenar'>
                <h2>Datos de profesional</h2>
                <hr />
                <div className='bloques_nuevo_profesional flex_fila_muy_separado'>
                    <div className="label_nuevo_profesional flex_columna_izquierda mi">
                        <label htmlFor="correo_electronico">Email:</label>
                        <label htmlFor="clave_acceso">Contraseña:</label>
                        <label htmlFor="nombre">Nombre:</label>
                        <label htmlFor="apellidos">Apellidos:</label>
                        <label htmlFor="calle">Calle:</label>
                        <label htmlFor="portal">Portal:</label>
                        <label htmlFor="piso">Piso:</label>
                        <label htmlFor="puerta">Puerta:</label>
                        <label htmlFor="ciudad">Ciudad:</label>
                        <label htmlFor="provincia">Provincia:</label>
                        <label htmlFor="codigopostal">Codigo Postal:</label>
                        <label htmlFor="telefono">Teléfono:</label>
                        <label htmlFor="rol">Puesto:</label>
                    </div>
                    <div id="input_nuevo_profesional" className="input_nuevo_profesional flex_columna_izquierda">
                        <input type="text" name="correo_electronico" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="clave_acceso" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="nombre" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="apellidos" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="calle" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="portal" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="piso" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="puerta" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="ciudad" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="provincia" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="codigopostal" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="telefono" onChange={(e)=>datosRegistroProfesional(e)}/>
                        <input type="text" name="rol" onChange={(e)=>datosRegistroProfesional(e)}/>
                    </div>
                </div>
            </div>
            <div className='flex_fila_separado ma ancho50'>
                <div className="boton" onClick={()=>registrarProfesional()}>GUARDAR</div>
                <div className="boton" onClick={()=>volver()}>VOLVER A PANTALLA INICIAL</div>
            </div>
        </div>
    )
}

export default connect((state)=>({
    profesionalLogado: state.profesionalLogado
}))(NuevoProfesional);