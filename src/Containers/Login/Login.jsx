import React from 'react';
import './Login.scss';
import logo from '../../img/logo-login.png'

const Login = () =>{
    return(
        <div className='contenedor_login contenedor flex_columna'>
            <img src={logo} alt="Logo" />
            <div className='formulario flex_columna'>
                <h2>LOGIN</h2>
                <div className="campo_formulario flex_columna_izquierda">
                    <label htmlFor="correo_electronico">Correo electrónico:</label>
                    <input type="email" name="correo_electronico" placeholder='Introduce tu correo electrónico'/>
                </div>
                <div className="campo_formulario flex_columna_izquierda">
                    <label htmlFor="clave_acceso">Contraseña de acceso:</label>
                    <input type="password" name="clave_acceso" placeholder='Introduce tu contraseña'/>
                </div>
                <div className="boton_formulario">
                    LOGIN
                </div>
            </div>
        </div>
    )
}

export default Login;