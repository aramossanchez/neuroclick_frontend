import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo-header.png';
import { connect } from 'react-redux';
import { USUARIO } from '../../redux/types';
import { PROFESIONAL } from '../../redux/types';

const Header = (props) =>{

    const navigate = useNavigate();

    const logout = () =>{
        props.dispatch({type:USUARIO, payload: {}});
        props.dispatch({type:PROFESIONAL, payload: {}});
        navigate("/");
    }

    const crearUsuario = () =>{
        navigate("/nuevousuario");
        props.dispatch({type:USUARIO, payload: {}});
    }
    const crearProfesional = () =>{
        navigate("/nuevoprofesional");
        props.dispatch({type:USUARIO, payload: {}});
    }

    const perfil = () =>{
        navigate("/aplicacion");
    }

    return(
        <div className='header flex_fila_muy_separado'>
            <div className="logo_header flex_fila">
                <img src={logo} alt="Logo" />
                <div className='enlace_header'>Profesional: {props.profesionalLogado.login.profesional.apellidos}, {props.profesionalLogado.login.profesional.nombre} ({props.profesionalLogado.login.profesional.rol})</div>
            </div>
            <div className="enlaces_header flex_fila">
                <div className='enlace_header'>Notificaciones</div>
                {props.profesionalLogado.login.profesional.rol === "admin" || props.profesionalLogado.login.profesional.rol === "Administración"
                ?
                <div className='flex_fila'>
                    <div className='enlace_header' onClick={()=>crearUsuario()}>Registrar nuevo usuario</div>
                    <div className='enlace_header' onClick={()=>crearProfesional()}>Registrar nuevo profesional</div>
                </div>
                :
                null}
                <div onClick={()=>logout()} className='enlace_header'>Salir</div>
            </div>
            
        </div>
    )
}

export default connect((state)=>({
    profesionalLogado: state.profesionalLogado
}))(Header);