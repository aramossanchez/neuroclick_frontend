import React, { useEffect, useState } from 'react';
import './PantallaAdmin.scss';
import Header from '../../Components/Header/Header.jsx';
import { connect } from 'react-redux';

/*IMPORTACIONES DE VISTAS DE ADMIN*/
import Vista_individual_admin from '../../Components/VistasAdmin/Vista_individual_admin/Vista_individual_admin';

const PantallaAdmin = (props) =>{

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //HOOKS
    const[vistaAdmin, setVistaAdmin] = useState("");

    //SELECCIONAR LA VISTA DE ADMIN QUE SE QUIERE GESTIONAR
    const elegirVista = (vista) =>{
        setVistaAdmin(vista);
    }

    return(
        <div className='contenedor flex_columna_muy_separado'>
            <Header/>
            <div className='bloques_admin flex_fila_mas_separado'>
                <div className="bloque_admin_izq">
                    <h2>Tablas para gestionar</h2>
                    <div className="tablas_admin" onClick={()=>elegirVista("profesionales")}>Profesionales</div>
                    <div className="tablas_admin" onClick={()=>elegirVista("usuarios")}>Usuarios</div>
                    <div className="tablas_admin" onClick={()=>elegirVista("antecedentes_familiares")}>Antecedentes familiares</div>
                    <div className="tablas_admin" onClick={()=>elegirVista()}>Enfermedades</div>
                    <div className="tablas_admin" onClick={()=>elegirVista()}>Relación entre enfermedades y usuarios</div>
                    <div className="tablas_admin" onClick={()=>elegirVista()}>Medicaciones</div>
                    <div className="tablas_admin" onClick={()=>elegirVista()}>Relación entre medicaciones y usuarios</div>
                    <div className="tablas_admin" onClick={()=>elegirVista()}>Pruebas</div>
                    <div className="tablas_admin" onClick={()=>elegirVista()}>Valoraciones</div>
                    <div className="tablas_admin" onClick={()=>elegirVista()}>Relación entre pruebas y valoraciones</div>
                    <div className="tablas_admin" onClick={()=>elegirVista()}>Pruebas realizadas</div>
                </div>
                <div className="bloque_admin_der">
                    {vistaAdmin === "profesionales"
                    ?
                    <Vista_individual_admin vista="profesionales" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "usuarios"
                    ?
                    <Vista_individual_admin vista="usuarios" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "antecedentes_familiares"
                    ?
                    <Vista_individual_admin vista="antecedentes_familiares" config={config}/>
                    :
                    null
                    }
                </div>
            </div>
        </div>
    )
}

export default connect((state)=>({
    datosVistas: state.datosVistas,
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(PantallaAdmin);