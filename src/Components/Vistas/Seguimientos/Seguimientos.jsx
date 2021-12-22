import React from 'react';
import './Seguimientos.scss';

const Seguimientos = () =>{

    return(
        <div className='contenedor_seguimientos contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Seguimientos</h2>
            <h3>Histórico de seguimientos</h3>
            <div className="columnas_seguimientos flex_fila_separado">
                <div className='columna_individual_seguimiento_corto'>Fecha</div>
                <div className='columna_individual_seguimiento_corto'>Profesional</div>
                <div className='columna_individual_seguimiento_largo'>Seguimiento</div>
            </div>
            <div className="total_seguimientos">
                <div className="seguimiento_individual flex_fila_arriba_separado_wrap">
                    <div className='seguimiento_individual_corto'>15/12/2020</div>
                    <div className='seguimiento_individual_corto'>Fisioterapia</div>
                    <div className='seguimiento_individual_largo'>Detectado dolor agudo de zona lumbar. Usuario indica que nota dolor en amplia gama de movimientos. Al palpar también indica dolor por toda la zona. Se ve inflamación de la zona.</div>
                </div>
            </div>
            <hr />
            <h3>Nuevo seguimiento</h3>
            <textarea></textarea>
            <div className='flex_columna'>
                <div className="boton">GUARDAR SEGUIMIENTO</div>
            </div>
        </div>
    )
}

export default Seguimientos;