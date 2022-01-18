import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import spin from '../../img/spin.gif';
import Api from '../../api/api';

const PruebasProfesionales = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOK

    //GUARDAR LAS PRUEBAS DEL PROFESIONAL
    const[pruebasProfesional, setpruebasProfesional] = useState([]);
    //GUARDAR EL HISTORICO COMPROBADO ACTUALMENTE
    const[historico, setHistorico] = useState([]);
    //GUARDA LA PRUEBA REVISADA O CREADA
    const[pruebaNueva, setPruebaNueva] = useState({});
    //GUARDA LAS VALORACIONES DE LA PRUEBA ACTUAL
    const[valoracionesPruebaNueva, setValoracionesPruebaNueva] = useState([]);
    //GUARDA LAS PUNTUACIONES DE LA PRUEBA ACTUAL
    const[respuestasPrueba, setRespuestasPrueba] = useState([]);
    //GUARDA SI SE ESTÁ CREANDO UNA PRUEBA NUEVA
    const[creandoPrueba, setCreandoPrueba] = useState(false);
    //CARGANDO IZQUIERDA
    const[cargandoIzquierda, setCargandoIzquierda] = useState(false);
    //CARGANDO DERECHA
    const[cargandoDerecha, setCargandoDerecha] = useState(false);
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    //AL CARGAR EL COMPONENTE SE CARGAN LAS PRUEBAS CORRESPONDIENTES AL PROFESIONAL
    useEffect(()=>{
        saberPruebas();
    }, []);

    //CADA VEZ QUE CAMBIA EL HOOK DONDE SE GUARDAN LAS VALORACIONES, PINTA LAS RESPUESTAS DEL HISTORICO SELECCIONADO
    useEffect(()=>{
        if (valoracionesPruebaNueva.length>0) {
            pintarPuntuacionesPrueba(respuestasPrueba);
        }
    }, [valoracionesPruebaNueva])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //SABER QUE PRUEBAS SON LAS QUE PUEDE HACER EL PROFESIONAL QUE SE HA LOGADO
    const saberPruebas = async () =>{
        try {
            setCargandoIzquierda(true)
            let res = await axios.get(`${api.conexion}/pruebas/profesional/${props.profesional}`, config);
            setpruebasProfesional(res.data);
            setCargandoIzquierda(false);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //VARIABLE PARA CONTROLAR SI EXISTE HISTORIAL DE UNA PRUEBA
    let pruebasRealizadas = false;

    //CONTRAE TODOS LOS DIV DE HISTORICOS
    const cerrarHistoricos = () => {
        let historicos = document.getElementsByClassName("historico_prueba");
        for (let i = 0; i < historicos.length; i++) {
            historicos[i].style.maxHeight="0em";
            historicos[i].style.transform="scaleY(0)";
        }
    }    

    //CONTROLA ABRIR O CERRAR HISTORIAL DE LA PRUEBA CLICKADA
    const abrirHistoricoPrueba = (e, historico) =>{
        cerrarHistoricos();
        //CAMBIA EL TEXTO DE TODOS LOS BOTONES DE HISTORIAL
        let botones = document.getElementsByClassName("ver_historial");
        for (let i = 0; i < botones.length; i++) {
            botones[i].innerHTML = "Ver historial";
        }
        //MUESTRA EL LISTADO SELECCIONADO
        let lista = document.getElementById(historico);
        lista.style.maxHeight="none";
        lista.style.transform="scaleY(1)";
    }

    //BUSCAR EL HISTORICO DE LA PRUEBA
    const saberHistoricoPrueba = async (id) =>{
        try {
            let res = await axios.get(`${api.conexion}/pruebas_hechas/prueba/${id}`, config);
            setHistorico(res.data);
        } catch (error) {
            setMensajeError(error);
        }
        
    }

    //FORMATEA LA FECHA DEL HISTORICO DE LA PRUEBA
    const editarFecha = (fecha) =>{
        let f = new Date(fecha);
        let fvalida = f.toLocaleDateString()
        return "Revisar prueba realizada el " + fvalida;
    }

    //OBTENER LA PRUEBA A REALIZAR
    const obtenerPrueba = async(id) => {
        try {
            setCargandoDerecha(true);
            let res = await axios.get(`${api.conexion}/pruebas/${id}`, config);
            setPruebaNueva(res.data);
            setCargandoDerecha(false);
        } catch (error) {
            setMensajeError(error);
        }
        
    }
    
    //OBTENER LAS VALORACIONES DE LA PRUEBA A REALIZAR
    const obtenerValoracionesPrueba = async(id) => {
        try {
            setCargandoDerecha(true);
            let res = await axios.get(`${api.conexion}/pruebas_valoraciones/prueba/${id}`, config);
            setValoracionesPruebaNueva(res.data);
            setCargandoDerecha(false);
        } catch (error) {
            setMensajeError(error);            
        }
        
    }
    
    //ESCRIBE LAS PUNTUACIONES CORRESPONDIENTES EN CADA VALORACIÓN PARA MOSTRAR HISTORICO DE PRUEBAS
    const pintarPuntuacionesPrueba = (puntuaciones) =>{
        //NECESARIO TIMEOUT PARA QUE NO FALLE NUNCA AL PINTAR LAS PUNTUACIONES
        setTimeout(() => {
            //RECORRO TANTAS VECES COMO VALORACIONES HAY
            for (let i = 0; i < valoracionesPruebaNueva.length; i++) {
                var label = document.getElementsByName(valoracionesPruebaNueva[i].valoracione.pregunta);
                //RECORRO LAS LABEL PARA CHECKEAR LA QUE CORRESPONDA CON LA PUNTUACION DE LA VALORACION CORRESPONDIENTE
                for (let e = 0; e < label.length; e++) {
                    if (label[e].value === puntuaciones[i]) {
                        label[e].checked = true;
                    }                
                }
            }
        }, 500);
    }

    //MANEJADOR DEL HOOK DONDE SE GUARDAN LAS RESPUESTAS DE LOS HISTORICOS DE LAS PRUEBAS
    const handlerRespuestasPrueba = (puntuaciones) =>{
        setRespuestasPrueba(puntuaciones);
    }

    //CREAR PRUEBA NUEVA
    const crearPrueba = (id) => {
        setValoracionesPruebaNueva([]);
        obtenerPrueba(id);
        obtenerValoracionesPrueba(id);
        handlerRespuestasPrueba([]);
        setCreandoPrueba(true);
    }

    //MOSTRAR PRUEBA Y PUNTUACIONES GUARDADAS
    const mostrarPruebaSeleccionada = (id) => {
        obtenerPrueba(id);
        obtenerValoracionesPrueba(id);
        setCreandoPrueba(false);
    }

    //VARIABLE PARA GUARDAR LAS PUNTUACIONES DE LA PRUEBA NUEVA QUE SE ESTÁ HACIENDO
    let puntuacionesRadios = [];

    //COMPROBAR RADIOS MARCADOS PARA GUARDAR RESULTADO DE PRUEBA EN BASE DE DATOS
    const comprobarRadios = () =>{
        puntuacionesRadios = []
        let radios = document.getElementsByTagName("input");
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                puntuacionesRadios.push(radios[i].value);
            }
        }
    }

    //GUARDAR REGISTRO DE PRUEBA NUEVA
    const guardarPrueba = async () =>{
        comprobarRadios();
        let prueba = {
            puntuacion: puntuacionesRadios.toString(),
            PruebaID: pruebaNueva.id,
            UsuarioID: props.usuarioSeleccionado.usuario.id,
            ProfesionalID: props.profesionalLogado.login.profesional.id
        }
        try {
            await axios.post(`${api.conexion}/pruebas_hechas/`, prueba, config);
            cerrarHistoricos();
            setPruebaNueva({});
            setValoracionesPruebaNueva([]);
            setCreandoPrueba(false);
            setMensajeError("Prueba creada correctamente.");
            setTimeout(() => {
                setMensajeError("");
            }, 4000);
        } catch (error) {
            setMensajeError(error);
        }
    }


    return(
        <div className="bloque_pruebas flex_fila_arriba_izquierda">
            {/* SI mensajeError ESTÁ VACIO NO MUESTRA NADA. SI TIENE ALGO, MUESTRA EL MENSAJE */}
            {!mensajeError
            ?
            null
            :
            <div className="mensaje_error">{mensajeError}</div>
            }
            {cargandoIzquierda
            ?
            <img src={spin} alt="Cargando" />
            :
            <div className='pruebas_disponibles flex_columna_arriba_izquierda mi'>
                {/* PRUEBAS LANZABLES Y SUS HISTORIALES */}
                {pruebasProfesional.map((prueba)=>{
                    return(
                        <div key={prueba.id} className="prueba_individual flex_columna_arriba_izquierda mi">
                            <div className="detalles_prueba flex_columna_arriba_izquierda">
                                <div className='nombre_prueba'>- {prueba.nombre}</div>
                                <div className="acciones_prueba flex_fila_izquierda">
                                    <div className='boton ver_historial' onClick={(e)=>{abrirHistoricoPrueba(e, `historico_prueba_${prueba.id}`);saberHistoricoPrueba(prueba.id)}}>Ver historial</div>
                                    {/* SOLO SE PUEDEN CREAR PRUEBAS SI SE ES EL TIPO DE PROFESIONAL CORRESPONDIENTE A LA PESTAÑA */}
                                    {props.profesionalLogado.login.profesional.rol === props.profesional
                                    ?
                                    <div className='boton' onClick={()=>crearPrueba(prueba.id)}>Añadir prueba</div>
                                    :
                                    null}                                    
                                </div>
                            </div>
                            <div className='historico_prueba' id={`historico_prueba_${prueba.id}`}>
                                {/* SABER SI LA PRUEBA TIENE HISTORIAL O NO */}
                                {historico.length===0
                                ?
                                <div>
                                    <div className=''>Aún no se ha realizado ninguna prueba de este tipo.</div>
                                </div>
                                :
                                historico.map((prueba_hecha)=>{
                                    if (prueba_hecha.UsuarioID===props.usuarioSeleccionado.usuario.id) {
                                        pruebasRealizadas = true
                                    }
                                    return(
                                        <div key={prueba_hecha.id}>
                                        {prueba_hecha.UsuarioID===props.usuarioSeleccionado.usuario.id
                                        ?
                                        <div className='' onClick={()=>{mostrarPruebaSeleccionada(prueba_hecha.PruebaID);handlerRespuestasPrueba(prueba_hecha.puntuacion.split(","))}}>{editarFecha(prueba_hecha.createdAt)}</div>
                                        :                                        
                                        null
                                        }
                                        </div>                           
                                    )
                                })
                                }
                                {/* LA PRUEBA PUEDE TENER HISTORIAL, PERO NO HABERSE HECHO NUNCA AL PACIENTE SELECCIONADO */}
                                {(pruebasRealizadas && historico.length>0) || (!pruebasRealizadas && historico.length===0)
                                ?
                                null
                                :
                                <div className=''>Aún no se ha realizado ninguna prueba de este tipo.</div>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
            }
            {/* PRUEBA ACTUAL */}
            {cargandoDerecha
            ?
            <img src={spin} alt="Cargando" />
            :
            <div className="bloque_prueba_actual flex_columna_arriba_izquierda">
                <h3>{creandoPrueba ? "Nueva " : null}{pruebaNueva.nombre}</h3>
                <div className="prueba_actual">
                    {/* MUESTRA TODAS LAS VALORACIONES DE LA PRUEBA SELECCIONADA */}
                    {valoracionesPruebaNueva.map((valoracion)=>{
                        let puntuaciones = [];
                        for (let i = 0; i <= valoracion.valoracione.escala; i++) {
                            if (!creandoPrueba) {
                                puntuaciones.push(
                                <label key={"valoracion_radio" + i}>
                                    <input disabled type="radio" name={valoracion.valoracione.pregunta} value={i}/>{i}
                                    <i></i>
                                </label>)
                            }else{
                                puntuaciones.push(
                                <label key={"valoracion_radio" + i}>
                                    <input type="radio" name={valoracion.valoracione.pregunta} value={i}/>{i}
                                    <i></i>
                                </label>)
                            }                                
                        }
                        return(
                            <div key={valoracion.id} className="pregunta_individual flex_fila_muy_separado">
                                <div className='pregunta_prueba'>{valoracion.valoracione.pregunta}</div>
                                <div className="puntuacion_prueba">
                                    {puntuaciones}
                                </div>
                            </div>
                        )
                    })}
                    {creandoPrueba
                    ?
                    <div className='flex_columna'>
                        <div className="boton" onClick={()=>guardarPrueba()}>GUARDAR PRUEBA</div>
                    </div>
                    :
                    null
                    }
                    
                </div>
            </div>
            }
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(PruebasProfesionales);