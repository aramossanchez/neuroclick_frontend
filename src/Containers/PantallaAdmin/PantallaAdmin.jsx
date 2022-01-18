import React, { useEffect, useState } from 'react';
import './PantallaAdmin.scss';
import Header from '../../Components/Header/Header.jsx';
import { connect } from 'react-redux';

/*IMPORTACIONES DE VISTAS DE ADMIN*/
import VistaIndividualAdmin from '../../Components/VistasAdmin/VistaIndividualAdmin/VistaIndividualAdmin';

const PantallaAdmin = (props) =>{

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //HOOKS
    const[vistaAdmin, setVistaAdmin] = useState("");

    //SELECCIONAR LA VISTA DE ADMIN QUE SE QUIERE GESTIONAR
    const elegirVista = (vista, e) =>{
        setVistaAdmin(vista);
        //CAMBIAR CLASE PARA MARCAR QUE TABLA ESTÁ SELECCIONADA
        let tablas = document.getElementsByClassName('tablas_admin');
        for (let i = 0; i < tablas.length; i++) {
            tablas[i].classList.remove('tabla_seleccionada')
        }
        e.target.classList.add('tabla_seleccionada');
    }

    return(
        <div className='contenedor flex_columna_muy_separado'>
            <Header/>
            <div className='bloques_admin flex_fila_mas_separado'>
                <div className="bloque_admin_izq">
                    <h2>Tablas para gestionar</h2>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("profesionales", e)}>Profesionales</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("usuarios", e)}>Usuarios</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("antecedentes_familiares", e)}>Antecedentes familiares</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("enfermedades", e)}>Enfermedades</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("enfermedades_usuarios", e)}>Relación entre enfermedades y usuarios</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("medicaciones", e)}>Medicaciones</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("medicaciones_usuarios", e)}>Relación entre medicaciones y usuarios</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("seguimientos", e)}>Seguimientos</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("pruebas", e)}>Pruebas</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("valoraciones", e)}>Valoraciones</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("pruebas_valoraciones", e)}>Relación entre pruebas y valoraciones</div>
                    <div className="tablas_admin" onClick={(e)=>elegirVista("pruebas_hechas", e)}>Pruebas realizadas</div>
                </div>
                
                <div className="bloque_admin_der flex_columna">
                    {vistaAdmin === ""
                    ?
                    <div className="mensaje_seleccion">Selecciona una tabla para empezar a gestionar la base de datos.</div>
                    :
                    null
                    }
                    {/* EN FUNCION DE CUAL SEA LA VISTA CLICKADA, SE CARGARÁ EL COMPONENTE CON UN PROP O CON OTRO. ES NECESARIO HACERLO ASÍ, PORQUE PASANDO EL HOOK DIRECTAMENTE AL PROP DEL COMPONENTE DA ERROR */}
                    {vistaAdmin === "profesionales"
                    ?
                    <VistaIndividualAdmin vista="profesionales" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "usuarios"
                    ?
                    <VistaIndividualAdmin vista="usuarios" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "antecedentes_familiares"
                    ?
                    <VistaIndividualAdmin vista="antecedentes_familiares" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "enfermedades"
                    ?
                    <VistaIndividualAdmin vista="enfermedades" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "enfermedades_usuarios"
                    ?
                    <VistaIndividualAdmin vista="enfermedades_usuarios" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "medicaciones"
                    ?
                    <VistaIndividualAdmin vista="medicaciones" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "medicaciones_usuarios"
                    ?
                    <VistaIndividualAdmin vista="medicaciones_usuarios" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "seguimientos"
                    ?
                    <VistaIndividualAdmin vista="seguimientos" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "pruebas"
                    ?
                    <VistaIndividualAdmin vista="pruebas" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "valoraciones"
                    ?
                    <VistaIndividualAdmin vista="valoraciones" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "pruebas_valoraciones"
                    ?
                    <VistaIndividualAdmin vista="pruebas_valoraciones" config={config}/>
                    :
                    null
                    }
                    {vistaAdmin === "pruebas_hechas"
                    ?
                    <VistaIndividualAdmin vista="pruebas_hechas" config={config}/>
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