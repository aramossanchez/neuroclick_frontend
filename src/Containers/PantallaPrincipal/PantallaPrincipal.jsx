import React, { useEffect } from 'react';
import './PantallaPrincipal.scss';
import Header from '../../Components/Header/Header.jsx';
import { connect } from 'react-redux';
import { HISTORIACLINICA } from '../../redux/types';

/*IMPORTACIÓN DE VISTAS*/
import HistoriaClinica from '../../Components/Vistas/HistoriaClinica/HistoriaClinica';

const PantallaPrincipal = (props) =>{

    useEffect(()=>{
        console.log(props.datosVistas);
    },[])

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
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e)}>Fisioterapeuta</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e)}>T. Ocupacional</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e)}>Neuropsicologa</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e)}>Logopeda</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e)}>Evolutiva</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e)}>Seguimientos</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e)}>Agenda</div>
                        <div className="vista vista_no_activa" onClick={(e)=>activarVista(e)}>Informes</div>
                    </div>
                    {props.datosVistas.vista === "historiaclinica"
                    ?
                    <HistoriaClinica/>
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