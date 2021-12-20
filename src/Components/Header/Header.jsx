import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo-header.png';

const Header = () =>{

    const navigate = useNavigate();

    const logout = () =>{
        navigate("/");
    }

    const perfil = () =>{
        navigate("/aplicacion");
    }

    return(
        <div className='header flex_fila_muy_separado'>
            <div className="logo_header">
                <img src={logo} alt="Logo" />
            </div>
            <div className="enlaces_header">
                <a href="">Perfil</a>
                <a href="/">Salir</a>
            </div>
            
        </div>
    )
}

export default Header;