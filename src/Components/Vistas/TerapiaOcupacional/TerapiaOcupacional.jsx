import React from 'react';
import './TerapiaOcupacional.scss';
import '.././VistasProfesiones.scss';
import PruebasProfesionales from '../../PruebasProfesionales/PruebasProfesionales'

const TerapiaOcupacional = () =>{

    return(
        <div className='contenedor_terapia_ocupacional contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Pruebas de Terapia Ocupacional</h2>
            <PruebasProfesionales profesional="Terapia Ocupacional"/>
        </div>
    )
}

export default TerapiaOcupacional;