import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo-login.png';
import { useState } from 'react';
import Api from '../../api/api';
import axios from 'axios';
import { connect } from 'react-redux';
import { PROFESIONAL } from '../../redux/types';

const Login = (props) =>{
    
    const navigate = useNavigate();

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //DATOS PARA LOGUEAR EN LA APP
    const[datosLoguear, setDatosLoguear] = useState ({correo_electronico:"", clave_acceso:""});
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    //GUARDADO DE DATOS PARA LOGUEAR EN LA APLICACIÓN
    const datosLogin = (e) =>{
        setDatosLoguear({...datosLoguear, [e.target.name]: e.target.value})
    }

    /*ENTRAR A LA APLICACIÓN*/
    const entrar = () =>{
        navigate("/aplicacion");
    }

    //FUNCIÓN PARA LOGUEAR PROFESIONAL
    const loguear = async () => {

        let body = {
            correo_electronico: datosLoguear.correo_electronico,
            clave_acceso: datosLoguear.clave_acceso
        };

        try {
            console.log(body);
            let res = await axios.post(`${api.conexion}/profesionales/login`, body);
            props.dispatch({type:PROFESIONAL, payload: res.data});
            setMensajeError("Login correcto. Bienvenido " + res.data.profesional.nombre);
            setTimeout(() => {
                entrar()
            }, 2000);
        } catch (error) {
            setMensajeError("Ha habido un error al intentar conectar con la base de datos.");
            setTimeout(() => {
                setMensajeError("");
            }, 4000);
        }
    }

    return(
        <div className='contenedor_login contenedor flex_columna'>
            {/* SI mensajeError ESTÁ VACIO NO MUESTRA NADA. SI TIENE ALGO, MUESTRA EL MENSAJE */}
            {!mensajeError
            ?
            null
            :
            <div className="mensaje-error">{mensajeError}</div>    
            }
            <img src={logo} alt="Logo" />
            <div className='formulario flex_columna'>
                <h2>LOGIN</h2>
                <div className="campo_formulario flex_columna_izquierda">
                    <label htmlFor="correo_electronico">Correo electrónico:</label>
                    <input type="email" name="correo_electronico" placeholder='Introduce tu correo electrónico' onChange={(e)=>datosLogin(e)}/>
                </div>
                <div className="campo_formulario flex_columna_izquierda">
                    <label htmlFor="clave_acceso">Contraseña de acceso:</label>
                    <input type="password" name="clave_acceso" placeholder='Introduce tu contraseña' onChange={(e)=>datosLogin(e)}/>
                </div>
                <div className="boton_formulario" onClick={()=>loguear()}>
                <abbr title="Entrar en la aplicación">ENTRAR</abbr>
                </div>
            </div>
        </div>
    )
}

export default connect()(Login);