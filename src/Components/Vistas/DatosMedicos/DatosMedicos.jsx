import React from 'react';
import './DatosMedicos.scss';

const DatosMedicos = () =>{

    return(
        <div className='contenedor_datos_medicos contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Datos médicos</h2>
            <div className="datos_medicos_usuario flex_fila_izquierda mi">
                <label htmlFor="edad">Edad:</label>
                <input type="email" name="edad" readOnly/>
                <label htmlFor="peso">Peso:</label>
                <input type="email" name="peso" readOnly/>
                <label htmlFor="estatura">Estatura:</label>
                <input type="email" name="estatura" readOnly/>
            </div>
            <hr />
            <h2>Antecedentes familiares</h2>
            <div className='bloque_multiples_datos_medicos mi'>

            </div>
            <hr />
            <h2>Enfermedades</h2>
            <div className='bloque_multiples_datos_medicos mi'>

            </div>
            <hr />
            <h2>Medicación actual</h2>
            <div className='bloque_multiples_datos_medicos mi'>

            </div>
        </div>
    )
}

export default DatosMedicos;