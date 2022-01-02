import React from 'react';
import './Fisioterapia.scss';
import '.././VistasProfesiones.scss';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Fisioterapia = (props) =>{

    //HOOK
    const[pruebasFisio, setPruebasFisio] = useState([]);
    const[historico, setHistorico] = useState([]);
    const[pruebaNueva, setPruebaNueva] = useState({});
    const[valoracionesPruebaNueva, setValoracionesPruebaNueva] = useState([])
    
    let pruebasRealizadas = false;

    useEffect(()=>{
        saberPruebas();
    }, [])

    //SABER QUE PRUEBAS SON LAS QUE PUEDE HACER FISIOTERAPIA
    const saberPruebas = async () =>{
        let res = await axios.get("http://localhost:3000/pruebas/profesional/fisioterapia");
        setPruebasFisio(res.data);
    }

    //SABER EL HISTORICO DE LA PRUEBA
    const saberHistoricoPrueba = async (id) =>{
        let res = await axios.get(`http://localhost:3000/pruebas_hechas/prueba/${id}`);
        setHistorico(res.data);
    }

    //CONTROLA ABRIR O CERRAR HISTORIAL DE LA PRUEBA CLICKADA
    const abrirHistoricoPrueba = (e, historico) =>{
        //CONTRAE TODOS LOS DIV DE HISTORICOS
        let historicos = document.getElementsByClassName("historico_prueba");
        for (let i = 0; i < historicos.length; i++) {
            historicos[i].style.maxHeight="0em";
            historicos[i].style.transform="scaleY(0)";
        }
        //CAMBIA EL TEXTO DE TODOS LOS BOTONES DE HISTORIAL
        let botones = document.getElementsByClassName("ver_historial");
        for (let i = 0; i < botones.length; i++) {
            botones[i].innerHTML = "Ver historial";
        }
        let lista = document.getElementById(historico);
        lista.style.maxHeight="none";
        lista.style.transform="scaleY(1)";
    }

    //CREAR PRUEBA NUEVA
    const crearPrueba = (id) => {
        obtenerPrueba(id);
        obtenerValoracionesPrueba(id);
    }

    //OBTENER LA PRUEBA A REALIZAR
    const obtenerPrueba = async(id) => {
        let res = await axios.get(`http://localhost:3000/pruebas/${id}`);
        setPruebaNueva(res.data);
    }
    
    //OBTENER LAS VALORACIONES DE LA PRUEBA A REALIZAR
    const obtenerValoracionesPrueba = async(id) => {
        let res = await axios.get(`http://localhost:3000/pruebas_valoraciones/prueba/${id}`);
        setValoracionesPruebaNueva(res.data);
    }

    let puntuacionesRadios = [];

    //COMPROBAR RADIOS MARCADOS
    const comprobarRadios = () =>{
        puntuacionesRadios = []
        let radios = document.getElementsByTagName("input");
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                puntuacionesRadios.push(radios[i].value);
            }
        }
    }

    //CREAR REGISTRO DE PRUEBA
    const guardarPrueba = async () =>{
        comprobarRadios();
        let prueba = {
            puntuacion: puntuacionesRadios.toString(),
            PruebaID: pruebaNueva.id,
            UsuarioID: props.usuarioSeleccionado.usuario.id,
            ProfesionalID: 3
        }
        let res = await axios.post(`http://localhost:3000/pruebas_hechas/`, prueba);
    }

    return(
        <div className='contenedor_fisioterapia contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Pruebas de Fisioterapia</h2>
            <div className="bloque_pruebas flex_fila_arriba_izquierda">
                <div className='pruebas_disponibles flex_columna_arriba_izquierda mi'>
                    {/* PRUEBAS LANZABLES Y SUS HISTORIALES */}
                    {pruebasFisio.map((prueba)=>{
                        return(
                            <div key={prueba.id} className="prueba_individual flex_columna_arriba_izquierda mi">
                                <div className="detalles_prueba flex_columna_arriba_izquierda">
                                    <div className='nombre_prueba'>- {prueba.nombre}</div>
                                    <div className="acciones_prueba flex_fila_izquierda">
                                        <div className='boton ver_historial' onClick={(e)=>{abrirHistoricoPrueba(e, `historico_prueba_${prueba.id}`);saberHistoricoPrueba(prueba.id)}}>Ver historial</div>
                                        <div className='boton' onClick={()=>crearPrueba(prueba.id)}>Añadir prueba</div>
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
                                            <div className=''>Prueba realizada el {prueba_hecha.createdAt}</div>
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
                {/* PRUEBA ACTUAL */}
                <div className="bloque_prueba_actual flex_columna_arriba_izquierda">
                    <h3>Nueva {pruebaNueva.nombre}</h3>
                    <div className="prueba_actual">
                        {/* MUESTRA TODAS LAS VALORACIONES DE LA PRUEBA SELECCIONADA */}
                        {valoracionesPruebaNueva.map((valoracion)=>{
                            let puntuaciones = [];
                            for (let i = 0; i < valoracion.valoracione.escala; i++) {
                                puntuaciones.push(
                                <label key={"valoracion_radio" + i}>
                                    <input type="radio" name={valoracion.valoracione.pregunta} value={i}/>{i}
                                    <i></i>
                                </label>)
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
                        <div className='flex_columna'>
                            <div className="boton" onClick={()=>guardarPrueba()}>GUARDAR PRUEBA</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='haciendo_prueba flex_columna_arriba_izquierda'></div>
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado
}))(Fisioterapia);