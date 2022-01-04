import React from 'react';
import './Logopedia.scss';
import '.././VistasProfesiones.scss';
import PruebasProfesionales from '../../PruebasProfesionales/PruebasProfesionales';

const Logopedia = () =>{

    return(
        <div className='contenedor_logopedia contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Pruebas de Logopedia</h2>
            <PruebasProfesionales profesional="logopedia"/>
        </div>
    )
}

export default Logopedia;