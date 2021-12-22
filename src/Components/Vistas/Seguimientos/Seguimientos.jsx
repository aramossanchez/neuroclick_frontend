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
                    <div className='seguimiento_individual_largo'>Me parece que este señor tiene dolor de espalda. Se agacha y se queja. Le toco en la espalda y dice: "auch, que haces niño mierda". Puedo confirmar dolor al palpar chicha.</div>
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