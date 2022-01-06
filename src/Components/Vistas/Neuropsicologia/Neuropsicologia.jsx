import React from 'react';
import './Neuropsicologia.scss';
import '.././VistasProfesiones.scss';
import PruebasProfesionales from '../../PruebasProfesionales/PruebasProfesionales';

const Neuropsicologia = () =>{

    return(
        <div className='contenedor_neuropsicologia contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Pruebas de Neuropsicología</h2>
            <PruebasProfesionales profesional="Neuropsicología"/>            
        </div>
    )
}

export default Neuropsicologia;