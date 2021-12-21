import React, { useEffect } from 'react';
import './PantallaPrincipal.scss';
import Header from '../../Components/Header/Header.jsx';
import { connect } from 'react-redux';
import { HISTORIACLINICA } from '../../redux/types';

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

const PantallaPrincipal = (props) =>{

    let vistas = document.getElementsByClassName('vista');

    const activarVista = (e,vista) =>{
        for (let i = 0; i < vistas.length; i++) {
            vistas[i].classList.add('vista_no_activa');
        }
        e.target.classList.remove('vista_no_activa');
        e.target.classList.add('vista_activa');
        props.dispatch({type:HISTORIACLINICA, payload: vista});
    }

    return(
        <div className='contenedor_principal contenedor flex_columna_muy_separado'>
            <Header/>
            <div className="bloques_principal flex_fila_mas_separado">
                <div className="contenedor_izq bloque_principal flex_columna_muy_separado">
                    <h2>Usuarios</h2>
                    <div className="campo_formulario">
                        <input type="email" name="buscar" placeholder='Buscar usuario'/>
                    </div>
                    <div className='contenedor_usuarios'>

                    </div>
                </div>
                <div className="contenedor_der bloque_principal">
                    <div className="vistas flex_fila_izquierda">
                        <div className="vista vista_activa" onClick={(e)=>activarVista(e, 'historiaclinica')}>Historia Clínica</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e, 'datosmedicos')}>Datos Médicos</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e, 'fisioterapia')}>Fisioterapia</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e, 'terapiaocupacional')}>T. Ocupacional</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e, 'neuropsicologia')}>Neuropsicología</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e, 'logopedia')}>Logopedia</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e, 'evolutiva')}>Evolutiva</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e, 'seguimientos')}>Seguimientos</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e, 'agenda')}>Agenda</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e)}>Informes</div>
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
                    
                </div>
            </div>
        </div>
    )
}

export default connect((state)=>({
    datosVistas: state.datosVistas
}))(PantallaPrincipal);