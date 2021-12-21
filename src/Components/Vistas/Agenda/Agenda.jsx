import React, { useEffect, useState } from 'react';
import './Agenda.scss';

const Agenda = () =>{

    //HOOKS
    const[fechaLunes, setFechaLunes] = useState(0);
    const[mes, setMes] = useState(0);
    const[año, setAño] = useState(0);

    
    useEffect(()=>{
        saberLunes();
    },[])
    
    useEffect(()=>{
        saberMes();
    },[fechaLunes])
    
    //FUNCION QUE CALCULA EL MES DEL LUNES DE LA SEMANA
    const saberMes = () =>{
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let fecha = new Date(fechaLunes);
        let mes = fecha.getMonth();
        let año = fecha.getFullYear();
        setMes(meses[mes]);
        setAño(año);
    }

    /* FUNCION QUE CALCULA EL LUNES DE LA SEMANA*/
    //A PARTIR DEL LUNES DE LA SEMANA, SE CALCULAN EL RESTO DE DÍAS
    const saberLunes = () =>{
        let fecha = new Date();
        let diaSemana = fecha.getDay();/*SABER QUE DIA DE LA SEMANA ES*/
        let diaCompleto = fecha.getTime();
        switch (diaSemana) {
            case 1:
                setFechaLunes(diaCompleto);
                break;
            case 2:
                let martes = new Date(diaCompleto - 86400000);
                setFechaLunes(martes);
                break;
            case 3:
                let miercoles = new Date(diaCompleto - (86400000*2));
                setFechaLunes(miercoles);
                break;
            case 4:
                let jueves = new Date(diaCompleto - (86400000*3));
                setFechaLunes(jueves);
                break;
            case 5:
                let viernes = new Date(diaCompleto - (86400000*4));
                setFechaLunes(viernes);
                break;
        
            default:
                break;
        }
    }

    //INDICA EL NUMERO DEL DÍA DENTRO DEL MES REVISADO
    const saberDia = (dia) =>{
        let fecha = new Date(fechaLunes);
        let diaActual = fecha.getTime() + (86400000 * (dia-1));
        let numeroDia = new Date(diaActual)
        return numeroDia.getDate();
    }

    const cambiarSemana = (signo) =>{
        let lunesAnterior = 0;
        let lunesActual = new Date (fechaLunes);
        if (signo === "-") {
            lunesAnterior = lunesActual.getTime() - (86400000*7);            
        }else{
            lunesAnterior = lunesActual.getTime() + (86400000*7);
        }
        let lunesElegido = new Date(lunesAnterior);
        setFechaLunes(lunesElegido);
    }

    return(
        <div className='contenedor_agenda contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Agenda semanal</h2>
            <div className="agenda_profesionales flex_fila_separado">
                <div className="profesionales_horarios">
                    <div className='profesion_horario flex_fila_muy_separado'>
                        <div>Usuario</div><div className="color_usuario"><abbr title="Mostrar todas las citas del usuario">📅</abbr></div>
                    </div>
                    <div className='profesion_horario flex_fila_muy_separado'>
                        <div>Fisioterapia</div><div className="color_fisioterapia"><abbr title="Mostrar citas de fisioterapia">📅</abbr></div>
                    </div>
                    <div className='profesion_horario flex_fila_muy_separado'>
                        <div>T. Ocupacional</div><div className="color_terapia_ocupacional"><abbr title="Mostrar citas de terapia ocupacional">📅</abbr></div>
                    </div>
                    <div className='profesion_horario flex_fila_muy_separado'>
                        <div>Neuropsicología</div><div className="color_neuropsicologia"><abbr title="Mostrar citas de neuropsicologia">📅</abbr></div>
                    </div>
                    <div className='profesion_horario flex_fila_muy_separado'>
                        <div>Logopedia</div><div className="color_logopedia"><abbr title="Mostrar citas de logopedia">📅</abbr></div>
                    </div>
                </div>
                <div className="agenda_semana flex_columna_arriba_derecha">
                    <div className='mes_horarios'>{mes} - {año}</div>
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
                                <div className='dia_horarios cita_fisioterapia'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios cita_neuropsicologia'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios cita_terapia_ocupacional'></div>
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
                                <div className='dia_horarios cita_fisioterapia'></div>
                                <div className='dia_horarios cita_terapia_ocupacional'></div>
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
                                <div className='dia_horarios cita_logopedia'></div>
                                <div className='dia_horarios cita_logopedia'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios cita_terapia_ocupacional'></div>
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
                                <div className='dia_horarios cita_fisioterapia'></div>
                                <div className='dia_horarios cita_logopedia'></div>
                                <div className='dia_horarios'></div>
                            </div>
                            <div className="fila_horarios flex_fila_separado">
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios cita_neuropsicologia'></div>
                                <div className='dia_horarios'></div>
                                <div className='dia_horarios cita_logopedia'></div>
                            </div>
                        </div>      
                    </div>
                    <div className='flex_fila_separado contenedor_botones'>
                        <div className='boton' onClick={()=>cambiarSemana("-")}>Semana anterior</div>
                        <div className='boton' onClick={()=>cambiarSemana("+")}>Semana siguiente</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agenda;