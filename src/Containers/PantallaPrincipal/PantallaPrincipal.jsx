import React, { useEffect, useState } from 'react';
import './PantallaPrincipal.scss';
import Header from '../../Components/Header/Header.jsx';
import { connect } from 'react-redux';
import { VISTASELECCIONADA } from '../../redux/types';
import { useNavigate } from 'react-router-dom';

/*IMPORTACIÓN DE VISTAS*/
import HistoriaClinica from '../../Components/Vistas/HistoriaClinica/HistoriaClinica';
import DatosMedicos from '../../Components/Vistas/DatosMedicos/DatosMedicos';
import Fisioterapia from '../../Components/Vistas/Fisioterapia/Fisioterapia';
import TerapiaOcupacional from '../../Components/Vistas/TerapiaOcupacional/TerapiaOcupacional';
import Neuropsicologia from '../../Components/Vistas/Neuropsicologia/Neuropsicologia';
import Logopedia from '../../Components/Vistas/Logopedia/Logopedia';
import Evolutiva from '../../Components/Vistas/Evolutiva/Evolutiva';
import Seguimientos from '../../Components/Vistas/Seguimientos/Seguimientos';
import Agenda from '../../Components/Vistas/Agenda/Agenda';
import Informe from '../../Components/Vistas/Informe/Informe';
import Usuarios from '../../Components/Usuarios/Usuarios';

const PantallaPrincipal = (props) =>{

    const navigate = useNavigate();

    //SELECCIONA QUE VISTA ESTARÁ ACTIVA EN LA APLICACIÓN
    let vistas = document.getElementsByClassName('vista');

    useEffect(()=>{
        if(props.profesionalLogado.login.profesional.rol === "admin"){
            navigate("/paneladmin");
        }
        props.dispatch({type:VISTASELECCIONADA, payload: "historiaclinica"});
    },[])

    useEffect(()=>{
        if (props.usuarioSeleccionado.usuario.id !== undefined) {
            activarVista(props.datosVistas.vista);
        }
    },[props.datosVistas.vista])

    const activarVista = (vista) =>{
        for (let i = 0; i < vistas.length; i++) {
            vistas[i].classList.add('vista_no_activa');
        }
        let pestaña = document.getElementById(vista)
        pestaña.classList.remove('vista_no_activa');
        pestaña.classList.add('vista_activa');
    }

    const cambiarVista = (vista) =>{
        props.dispatch({type:VISTASELECCIONADA, payload: vista});
    }

    return(
        <div className='contenedor flex_columna_muy_separado'>
            <Header/>
            <div className="bloques_principales flex_fila_mas_separado">
                <Usuarios/>
                <div className={props.usuarioSeleccionado.usuario.id === undefined ? "contenedor_der bloque_principal flex_columna" : "contenedor_der bloque_principal"}>
                    {props.usuarioSeleccionado.usuario.id === undefined
                    ?
                    <div className="mensaje_seleccion">Selecciona a un usuario para visualizar su ficha.</div>
                    :
                    <div className='bloque_principal'>
                        {/* ADMINISTRACIÓN NO TIENE ACCESO A LA INFORMACIÓN DE LAS PRUEBAS DE LOS USUARIOS */}
                        <div className="vistas flex_fila_izquierda">
                            <div id="historiaclinica" className="vista vista_activa" onClick={(e)=>cambiarVista('historiaclinica')}>Historia Clínica</div>
                            <div id="datosmedicos" className="vista vista_no_activa" onClick={(e)=>cambiarVista('datosmedicos')}>Datos Médicos</div>
                            {props.profesionalLogado.login.profesional.rol === "Administración"
                            ?
                            null
                            :
                            <div id="fisioterapia" className="vista vista_no_activa" onClick={(e)=>cambiarVista('fisioterapia')}>Fisioterapia</div>
                            }
                            {props.profesionalLogado.login.profesional.rol === "Administración"
                            ?
                            null
                            :
                            <div id="terapiaocupacional" className="vista vista_no_activa" onClick={(e)=>cambiarVista('terapiaocupacional')}>T. Ocupacional</div>
                            }
                            {props.profesionalLogado.login.profesional.rol === "Administración"
                            ?
                            null
                            :
                            <div id="neuropsicologia" className="vista vista_no_activa" onClick={(e)=>cambiarVista('neuropsicologia')}>Neuropsicología</div>
                            }
                            {props.profesionalLogado.login.profesional.rol === "Administración"
                            ?
                            null
                            :
                            <div id="logopedia" className="vista vista_no_activa" onClick={(e)=>cambiarVista('logopedia')}>Logopedia</div>
                            }
                            {props.profesionalLogado.login.profesional.rol === "Administración"
                            ?
                            null
                            :
                            <div id="evolutiva" className="vista vista_no_activa" onClick={(e)=>cambiarVista('evolutiva')}>Evolutiva</div>
                            }
                            {props.profesionalLogado.login.profesional.rol === "Administración"
                            ?
                            null
                            :
                            <div id="seguimientos" className="vista vista_no_activa" onClick={(e)=>cambiarVista('seguimientos')}>Seguimientos</div>
                            }
                            <div id="agenda" className="vista vista_no_activa" onClick={(e)=>cambiarVista('agenda')}>Agenda</div>
                            {props.profesionalLogado.login.profesional.rol === "Administración"
                            ?
                            null
                            :
                            <div id="informe" className="vista vista_no_activa" onClick={(e)=>cambiarVista('informe')}>Informe</div>
                            }
                        </div>
                        {/* ALTERNANCIA DE VISTA EN FUNCION DE QUE PESTAÑA PINCHEMOS */}
                        {props.datosVistas.vista === "historiaclinica"
                        ?
                        <HistoriaClinica/>
                        :
                        null}
                        {props.datosVistas.vista === "datosmedicos"
                        ?
                        <DatosMedicos/>
                        :
                        null}
                        {props.datosVistas.vista === "fisioterapia"
                        ?
                        <Fisioterapia/>
                        :
                        null}
                        {props.datosVistas.vista === "terapiaocupacional"
                        ?
                        <TerapiaOcupacional/>
                        :
                        null}
                        {props.datosVistas.vista === "neuropsicologia"
                        ?
                        <Neuropsicologia/>
                        :
                        null}
                        {props.datosVistas.vista === "logopedia"
                        ?
                        <Logopedia/>
                        :
                        null}
                        {props.datosVistas.vista === "evolutiva"
                        ?
                        <Evolutiva/>
                        :
                        null}
                        {props.datosVistas.vista === "seguimientos"
                        ?
                        <Seguimientos/>
                        :
                        null}
                        {props.datosVistas.vista === "agenda"
                        ?
                        <Agenda/>
                        :
                        null}
                        {props.datosVistas.vista === "informe"
                        ?
                        <Informe/>
                        :
                        null}
                    </div>
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
}))(PantallaPrincipal);