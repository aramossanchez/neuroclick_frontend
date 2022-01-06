import React, { useEffect, useState } from 'react';
import './NuevoUsuario.scss';
import { useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import { connect } from 'react-redux';
import axios from 'axios';

const NuevoUsuario = (props) =>{

    const navigate = useNavigate();

    //GUARDA URL DE LA API
    let api = new Api();

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //HOOKS
    const[datosRegistrarUsuario, setDatosRegistrarUsuario] = useState({
        nombre: "",
        apellidos: "",
        calle: "",
        portal: "",
        piso: "",
        puerta: "",
        poblacion: "",
        provincia: "",
        codigopostal: "",
        telefono_usuario: "",
        pension: "",
        persona_contacto: "",
        telefono_contacto: "",
        fecha_nacimiento: "",
        peso: "",
        estatura: ""
    });
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        console.log(datosRegistrarUsuario);
    }, [datosRegistrarUsuario])

    //GUARDADO DE DATOS PARA CREAR USUARIO NUEVO
    const datosRegistroUsuario = (e) =>{
        setDatosRegistrarUsuario({...datosRegistrarUsuario, [e.target.name]: e.target.value})
    }

    //VOLVER A LA PANTALLA PRINCIPAL DE LA APLICACIÓN
    const volver = () =>{
        navigate("/aplicacion");
    }

    //REGISTRA UN USUARIO NUEVO EN LA BASE DE DATOS
    const registrarUsuario = async() =>{
        let body = {
            nombre: datosRegistrarUsuario.nombre,
            apellidos: datosRegistrarUsuario.apellidos,
            direccion: "Calle " + datosRegistrarUsuario.calle + ", " + "número " + datosRegistrarUsuario.portal + ", " + "piso " + datosRegistrarUsuario.piso + ", " + "puerta " + datosRegistrarUsuario.puerta + ", " + datosRegistrarUsuario.poblacion + ", " + datosRegistrarUsuario.provincia + ", " + datosRegistrarUsuario.codigopostal,
            telefono_usuario: datosRegistrarUsuario.telefono_usuario,
            pension: datosRegistrarUsuario.pension,
            persona_contacto: datosRegistrarUsuario.persona_contacto,
            telefono_contacto: datosRegistrarUsuario.telefono_contacto,
            fecha_nacimiento: datosRegistrarUsuario.fecha_nacimiento,
            peso: datosRegistrarUsuario.peso,
            estatura: datosRegistrarUsuario.estatura
            // nombre: "Fernando",
            // apellidos: "López Vázquez",
            // direccion: "Calle Toledo, número 20, piso 3, puerta C",
            // telefono_usuario: "666666666",
            // persona_contacto: "Esteban Requena Fiel",
            // telefono_contacto: "611412502",
            // fecha_nacimiento: "2000/11/05",
            // peso: 80,
            // estatura: 192
        };
        try {
            await axios.post(`${api.conexion}/usuarios/`, body, config);            
            setDatosRegistrarUsuario(({}));            
            // let inputs = document.getElementById("input_nuevo_profesional").childNodes
            // for (let i = 0; i < inputs.length; i++) {
            //     inputs[i].value = "";
            // }
            setMensajeError("Nuevo usuario registrado correctamente");
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
        <div className='contenedor_nuevo_usuario contenedor'>
            <h2>NUEVO USUARIO</h2>
            {/* SI mensajeError ESTÁ VACIO NO MUESTRA NADA. SI TIENE ALGO, MUESTRA EL MENSAJE */}
            {!mensajeError
            ?
            null
            :
            <div className="mensaje_error">{mensajeError}</div>    
            }
            <div className='flex_fila_arriba_separado_wrap'>
                <div className='bloque_rellenar'>
                    <h2>Datos personales</h2>
                    <hr />
                    <div className='bloques_historia_clinica flex_fila_muy_separado'>
                        <div className="label_historia_clinica_datos flex_columna_izquierda mi">
                            <label htmlFor="nombre">Nombre:</label>
                            <label htmlFor="apellidos">Apellidos:</label>
                            <label htmlFor="calle">Calle:</label>
                            <label htmlFor="portal">Portal:</label>
                            <label htmlFor="piso">Piso:</label>
                            <label htmlFor="puerta">Puerta:</label>
                            <label htmlFor="poblacion">Población:</label>
                            <label htmlFor="provincia">Provincia:</label>
                            <label htmlFor="codigopostal">Codigo Postal:</label>
                            <label htmlFor="telefono_usuario">Teléfono:</label>
                        </div>
                        <div className="input_historia_clinica_datos flex_columna_izquierda">
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="nombre"/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="apellidos"/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="calle"/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="portal"/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="piso"/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="puerta"/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="poblacion"/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="provincia"/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="codigopostal"/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="telefono_usuario"/>
                        </div>
                    </div>
                </div>
                <div className='bloque_rellenar'>
                    <h2>Social</h2>
                    <hr />
                    <div className='bloques_historia_clinica flex_fila_muy_separado'>
                        <div className="label_historia_clinica_social flex_columna_izquierda mi">
                            <label htmlFor="pension">Pensión:</label>
                            <label htmlFor="persona_contacto">Persona de contacto:</label>
                            <label htmlFor="telefono_contacto">Teléfono de persona de contacto:</label>
                        </div>
                        <div className="input_historia_clinica_social flex_columna_izquierda">
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="pension" placeholder='Pensión en euros'/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="persona_contacto" placeholder='Nombre y apellidos de persona de contacto'/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="telefono_contacto"/>
                        </div>
                    </div>
                    <h2>Datos médicos</h2>
                    <hr />
                    <div className='bloques_historia_clinica flex_fila_muy_separado'>
                        <div className="label_datos_medicos flex_columna_izquierda mi">
                            <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
                            <label htmlFor="peso">Peso:</label>
                            <label htmlFor="estatura">Estatura:</label>
                        </div>
                        <div className="input_datos_medicos flex_columna_izquierda">
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="fecha_nacimiento" placeholder='Año/Mes/Día'/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="peso" placeholder='Peso en kgs'/>
                            <input type="text" onChange={(e)=>datosRegistroUsuario(e)} name="estatura" placeholder='Altura en cms'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex_fila_separado ma'>
                <div className="boton" onClick={()=>registrarUsuario()}>GUARDAR</div>
                <div className="boton" onClick={()=>volver()}>VOLVER A PANTALLA INICIAL</div>
            </div>
        </div>
    )
}

export default connect((state)=>({
    profesionalLogado: state.profesionalLogado
}))(NuevoUsuario);