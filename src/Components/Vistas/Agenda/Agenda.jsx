import React from 'react';
import './Agenda.scss';

const Agenda = () =>{

    return(
        <div className='contenedor_agenda contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Agenda</h2>
            <div className="agenda_profesionales flex_fila_arriba_izquierda">
                <div className="profesionales_horarios">
                    <div>Fisioterapia</div>
                    <div>T. Ocupacional</div>
                    <div>Neuropsicología</div>
                    <div>Logopedia</div>
                </div>
                <div className="agenda_semana flex_columna">
                    <div className="dias_semana flex_fila_separado">
                        <div></div>
                        <div>Lunes</div>
                        <div>Martes</div>
                        <div>Miércoles</div>
                        <div>Jueves</div>
                        <div>Viernes</div>
                    </div>
                    <div className="horas_horarios flex_fila_arriba_derecha">
                        <div className="horas_jornada">
                            <div>8:00</div>
                            <div>9:00</div>
                            <div>10:00</div>
                            <div>11:00</div>
                            <div>12:00</div>
                            <div>13:00</div>
                            <div>14:00</div>
                            <div>15:00</div>
                            <div>16:00</div>
                            <div>17:00</div>
                        </div>
                        <div className='horarios'>
                        </div>      
                    </div>
                    


                </div>
            </div>
            <div className="agenda_usuario flex_fila_arriba_izquierda">
                
            </div>
        </div>
    )
}

export default Agenda;