import React from 'react';
import './Agenda.scss';

const Agenda = () =>{

    const mesActual = () =>{
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let fecha = new Date();
        let mes = fecha.getMonth();
        return meses[mes];
    }
    const diaDelMes = (dia) =>{
        var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let fecha = new Date();
        let dia = fecha.getDay()
        return dia;
    }

    return(
        <div className='contenedor_agenda contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Agenda</h2>
            <div className="agenda_profesionales flex_fila_separado">
                <div className="profesionales_horarios">
                    <div className='profesion_horario flex_fila_muy_separado'>
                        <div>Fisioterapia</div><div className="color_fisioterapia"></div>
                    </div>
                    <div className='profesion_horario flex_fila_muy_separado'>
                        <div>T. Ocupacional</div><div className="color_terapia_ocupacional"></div>
                    </div>
                    <div className='profesion_horario flex_fila_muy_separado'>
                        <div>Neuropsicología</div><div className="color_neuropsicologia"></div>
                    </div>
                    <div className='profesion_horario flex_fila_muy_separado'>
                        <div>Logopedia</div><div className="color_logopedia"></div>
                    </div>
                </div>
                <div className="agenda_semana flex_columna_arriba_derecha">
                    <div className='mes_horarios'>{mesActual()}</div>
                    <div className="dias_semana flex_fila_separado">
                        <div>Lunes {diaDelMes()}</div>
                        <div>Martes {diaDelMes()}</div>
                        <div>Miércoles {diaDelMes()}</div>
                        <div>Jueves {diaDelMes()}</div>
                        <div>Viernes {diaDelMes()}</div>
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
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios cita_neuropsicologia'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios cita_neuropsicologia'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios cita_neuropsicologia'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios cita_neuropsicologia'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                            </div>
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