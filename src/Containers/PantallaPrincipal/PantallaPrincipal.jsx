import React, { useEffect, useState } from 'react';
import './PantallaPrincipal.scss';
import Header from '../../Components/Header/Header.jsx';
import { connect } from 'react-redux';
import { VISTASELECCIONADA } from '../../redux/types';

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

    //SELECCIONA QUE VISTA ESTARÁ ACTIVA EN LA APLICACIÓN
    let vistas = document.getElementsByClassName('vista');

    useEffect(()=>{
        props.dispatch({type:VISTASELECCIONADA, payload: "historiaclinica"});
    },[])

    useEffect(()=>{
        activarVista(props.datosVistas.vista);
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
        <div className='contenedor_principal contenedor flex_columna_muy_separado'>
            <Header/>
            <div className="bloques_principal flex_fila_mas_separado">
                <Usuarios/>
                <div className="contenedor_der bloque_principal">
                    <div className="vistas flex_fila_izquierda">
                        <div id="historiaclinica" className="vista vista_activa" onClick={(e)=>cambiarVista('historiaclinica')}>Historia Clínica</div>
                        <div id="datosmedicos" className="vista vista_no_activa" onClick={(e)=>cambiarVista('datosmedicos')}>Datos Médicos</div>
                        <div id="fisioterapia" className="vista vista_no_activa" onClick={(e)=>cambiarVista('fisioterapia')}>Fisioterapia</div>
                        <div id="terapiaocupacional" className="vista vista_no_activa" onClick={(e)=>cambiarVista('terapiaocupacional')}>T. Ocupacional</div>
                        <div id="neuropsicologia" className="vista vista_no_activa" onClick={(e)=>cambiarVista('neuropsicologia')}>Neuropsicología</div>
                        <div id="logopedia" className="vista vista_no_activa" onClick={(e)=>cambiarVista('logopedia')}>Logopedia</div>
                        <div id="evolutiva" className="vista vista_no_activa" onClick={(e)=>cambiarVista('evolutiva')}>Evolutiva</div>
                        <div id="seguimientos" className="vista vista_no_activa" onClick={(e)=>cambiarVista('seguimientos')}>Seguimientos</div>
                        <div id="agenda" className="vista vista_no_activa" onClick={(e)=>cambiarVista('agenda')}>Agenda</div>
                        <div id="informe" className="vista vista_no_activa" onClick={(e)=>cambiarVista('informe')}>Informe</div>
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
            </div>
        </div>
    )
}

export default connect((state)=>({
    datosVistas: state.datosVistas
}))(PantallaPrincipal);