import React from 'react';
import './Fisioterapia.scss';
import '.././VistasProfesiones.scss';
import PruebasProfesionales from '../../PruebasProfesionales/PruebasProfesionales';

const Fisioterapia = () =>{


    return(
        <div className='contenedor_fisioterapia contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Pruebas de Fisioterapia</h2>
            <PruebasProfesionales profesional="Fisioterapia"/>
        </div>
    )
}

export default Fisioterapia;