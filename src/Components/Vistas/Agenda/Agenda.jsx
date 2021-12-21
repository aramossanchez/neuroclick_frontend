import React, { useEffect, useState } from 'react';
import './Agenda.scss';

const Agenda = () =>{

    //HOOKS
    const[lunes, setLunes] = useState(0);
    const[fechaLunes, setFechaLunes] = useState(0);
    const[mes, setMes] = useState(0);

    
    useEffect(()=>{
        saberLunes();
    },[])
    
    useEffect(()=>{
        saberMes();
    },[lunes])
    
    //FUNCION QUE CALCULA EL MES DEL LUNES DE LA SEMANA
    const saberMes = () =>{
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let fecha = new Date(fechaLunes);
        let mes = fecha.getMonth();
        setMes(meses[mes]);
    }

    /* FUNCION QUE CALCULA EL LUNES DE LA SEMANA*/
    const saberLunes = () =>{
        let fecha = new Date();
        let diaSemana = fecha.getDay();/*SABER QUE DIA DE LA SEMANA ES*/
        let diaCompleto = fecha.getTime();
        let diaMes = fecha.getDate();
        switch (diaSemana) {
            case 1:
                setLunes(diaMes);
                setFechaLunes(diaCompleto);
                break;
            case 2:
                let martes = new Date(diaCompleto - 86400000);
                setLunes(martes.getDate());
                setFechaLunes(martes);
                break;
            case 3:
                let miercoles = new Date(diaCompleto - (86400000*2));
                setLunes(miercoles.getDate());
                setFechaLunes(miercoles);
                break;
            case 4:
                let jueves = new Date(diaCompleto - (86400000*3));
                setLunes(jueves.getDate());
                setFechaLunes(jueves);
                break;
            case 5:
                let viernes = new Date(diaCompleto - (86400000*4));
                setLunes(viernes.getDate());
                setFechaLunes(viernes);
                break;
        
            default:
                break;
        }
    }

    const saberDia = (dia) =>{
        let fecha = new Date(fechaLunes);
        let diaActual = fecha.getTime() + (86400000 * (dia-1));
        let numeroDia = new Date(diaActual)
        return numeroDia.getDate();
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
                    <div className='mes_horarios'>{mes}</div>
                    <div className="dias_semana flex_fila_separado">
                        <div>Lunes {saberDia(1)}</div>
                        <div>Martes {saberDia(2)}</div>
                        <div>Miércoles {saberDia(3)}</div>
                        <div>Jueves {saberDia(4)}</div>
                        <div>Viernes {saberDia(5)}</div>
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