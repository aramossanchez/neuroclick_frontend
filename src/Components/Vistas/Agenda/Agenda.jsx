import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Agenda.scss';
import Api from '../../../api/api';
import { connect } from 'react-redux';

const Agenda = (props) =>{
    
    //GUARDA URL DE LA API
    let api = new Api();

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //HOOKS
    const[fechaLunes, setFechaLunes] = useState(0);
    const[mesLetra, setMesLetra] = useState(0);
    const[mesNumero, setMesNumero] = useState(0);
    const[año, setAño] = useState(0);
    //GUARDA CITAS DEL USUARIO SELECCIONADO
    const[listadoCitas, setListadoCitas] = useState([]);
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");
    
    useEffect(()=>{
        saberLunes();
        traerCitasUsuario();
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
        setMesNumero(mes);
        setMesLetra(meses[mes]);
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
            case 6:
                let sabado = new Date(diaCompleto - (86400000*5));
                setFechaLunes(sabado);
                break;
            case 0:
                let domingo = new Date(diaCompleto - (86400000*6));
                setFechaLunes(domingo);
                break;
        
            default:
                break;
        }
    }
     const arrayHoras = [8,9,10,11,12,13,14,15,16,17]
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

    //TRAE DE LA BASE DE DATOS EL LISTADO DE CITAS DEL USUARIO SELECCIONADO
    const traerCitasUsuario = async () =>{
        try {
            let res = await axios.get(`${api.conexion}/citas/usuario/${props.usuarioSeleccionado.usuario.id}`, config);
            setListadoCitas(res.data)
        } catch (error) {
            setMensajeError(error);
        }
    }

    //AVERIGUA SI EL DÍA Y LA HORA DE LA CASILLA CORRESPONDIENTE EXISTE UNA CITA ASIGNADA, Y SI EXISTE LO PINTA EN PANTALLA
    const existeCita = (hora, dia, mes, año) =>{
        let citaEncontrada = <div className='dia_horarios'></div>;
        listadoCitas.map((cita)=>{
            let fechaCita = new Date(cita.horario_cita);
            let horaCita = fechaCita.getHours()
            let diaCita = fechaCita.getDate()
            let mesCita = fechaCita.getMonth()
            let añoCita = fechaCita.getFullYear()
            if (hora === horaCita && dia === diaCita && mes === mesCita && año === añoCita) {
                let estilo = ""
                let funcion = [(props.usuarioSeleccionado.usuario.nombre + " " + props.usuarioSeleccionado.usuario.apellidos), (cita.profesionale.nombre + " " + cita.profesionale.apellidos), ("El día " + diaCita + "-" + (mesCita+1) + "-" + añoCita + ", a las " + horaCita + ":00")]
                switch (cita.profesionale.rol) {
                    case "Fisioterapia":
                        estilo = "dia_horarios flex_columna cita_fisioterapia"
                        break;
                    case "Terapia Ocupacional":
                        estilo = "dia_horarios flex_columna cita_terapia_ocupacional"
                        break;
                    case "Neuropsicología":
                        estilo = "dia_horarios flex_columna cita_neuropsicologia"
                        break;
                    case "Logopedia":
                        estilo = "dia_horarios flex_columna cita_logopedia"
                        break;
                
                    default:
                        break;
                }
                citaEncontrada = <div onMouseOver={(e)=>verDetalles(e)} onMouseOut={(e)=>ocultarDetalles(e)} className={estilo}>{cita.profesionale.rol}<div className='detalles_cita invisible'><p>Usuario: {funcion[0]}</p><p>Profesional: {funcion[1]}</p><p>Fecha de la cita: {funcion[2]}</p></div></div>
            }
        })
        return citaEncontrada
    }

    //PASAR EL RATÓN POR ENCIMA DE LA CITA PARA VER LOS DETALLES
    const verDetalles = (e) =>{
        e.target.querySelector('div').classList.remove('invisible');
    }
    
    //PASAR EL RATÓN POR ENCIMA DE LA CITA PARA VER LOS DETALLES
    const ocultarDetalles = (e) =>{
        e.target.querySelector('div').classList.add('invisible');
    }

    return(
        <div className='contenedor_agenda contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Agenda de {props.usuarioSeleccionado.usuario.nombre} {props.usuarioSeleccionado.usuario.apellidos}</h2>
            <div className="agenda_profesionales flex_fila_separado">
                {props.profesionalLogado.login.profesional.rol === "Administración"
                ?
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
                :
                null
                }
                <div className="agenda_semana flex_columna_arriba_derecha">
                    <div className='mes_horarios'>{mesLetra} - {año}</div>
                    <div className="dias_semana flex_fila_separado">
                        <div>Lunes {saberDia(1)}</div>
                        <div>Martes {saberDia(2)}</div>
                        <div>Miércoles {saberDia(3)}</div>
                        <div>Jueves {saberDia(4)}</div>
                        <div>Viernes {saberDia(5)}</div>
                    </div>
                    <div className="horas_horarios flex_fila_arriba_derecha">
                        <div className="horas_jornada">
                            <div className='flex_columna'>8:00</div>
                            <div className='flex_columna'>9:00</div>
                            <div className='flex_columna'>10:00</div>
                            <div className='flex_columna'>11:00</div>
                            <div className='flex_columna'>12:00</div>
                            <div className='flex_columna'>13:00</div>
                            <div className='flex_columna'>14:00</div>
                            <div className='flex_columna'>15:00</div>
                            <div className='flex_columna'>16:00</div>
                            <div className='flex_columna'>17:00</div>
                        </div>
                        <div className='horarios'>
                            {arrayHoras.map((hora)=>{
                                return(
                                    <div className="fila_horarios flex_fila_separado">
                                        {existeCita(hora, saberDia(1), mesNumero, año)}
                                        {existeCita(hora, saberDia(2), mesNumero, año)}
                                        {existeCita(hora, saberDia(3), mesNumero, año)}
                                        {existeCita(hora, saberDia(4), mesNumero, año)}
                                        {existeCita(hora, saberDia(5), mesNumero, año)}
                                    </div>
                                )
                            })}
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

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(Agenda);