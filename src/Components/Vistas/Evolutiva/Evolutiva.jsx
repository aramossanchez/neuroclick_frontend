import './Evolutiva.scss';
import axios from 'axios';
import React from 'react';
import Api from '../../../api/api';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const Evolutiva = (props) =>{
    
    //GUARDA URL DE LA API
    let api = new Api();

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //HOOKS
    //LISTADO DE PRUEBAS HECHAS AL USUARIO
    const[nombresPruebas, setNombresPruebas] = useState([]);
    //LISTADO DE PRUEBAS HECHAS AL USUARIO
    const[pruebasSeleccionadasCompletas, setPruebasSeleccionadasCompletas] = useState([]);
    //HISTORIAL DE PRUEBAS SELECCIONADAS
    const[historialPruebasSeleccionadas, setHistorialPruebasSeleccionadas] = useState([]);
    //VISUALIZANDO LAS GRAFICAS
    const[viendoEvolutivas, setViendoEvolutivas] = useState(false);
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        obtenerPruebasUsuario();
    },[]);
    
    //TRAE TODAS LAS PRUEBAS REALIZADAS AL USUARIO
    const obtenerPruebasUsuario = async () =>{
        let pruebas = [];
        let pruebasFiltrado = [];
        try {
            let res = await axios.get(`${api.conexion}/pruebas_hechas/usuario/${props.usuarioSeleccionado.usuario.id}`, config);
            //GUARDA EN ARRAY PRUEBAS LOS NOMBRES DE LAS PRUEBAS REALIZADAS
            res.data.map((registro)=>{
                pruebas.push(registro.prueba.nombre);
            })
            //GUARDA EN ARRAY PRUEBASFILTRADO LOS NOMBRES DE LAS PRUEBAS HECHAS SIN REPETIRLOS
            for (let i = 0; i < pruebas.length; i++) {
                if(!pruebasFiltrado.includes(pruebas[i])){
                    pruebasFiltrado.push(pruebas[i]);
                }
            }
            setNombresPruebas(pruebasFiltrado);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //GUARDA LAS PRUEBAS SELECCIONADAS EN UN ARRAY
    let pruebasSeleccionadas = [];

    const seleccionarPrueba = (e) =>{
        if (e.target.classList.contains('prueba_seleccionada')) {
            e.target.classList.remove('prueba_seleccionada');
            pruebasSeleccionadas = pruebasSeleccionadas.filter(prueba=> prueba !== e.target.innerHTML)
            return
        }else{
            e.target.classList.add('prueba_seleccionada');
            pruebasSeleccionadas.push(e.target.innerHTML);
            return
        }
    }

    //MUESTRA LAS GRAFICAS DE LAS PRUEBAS
    let historialPruebas = [];
    let objetosPruebasSeleccionadas = [];
    const mostrarGraficas = async () =>{
        setPruebasSeleccionadasCompletas(pruebasSeleccionadas);
        for (let i = 0; i < pruebasSeleccionadas.length; i++) {
            let body = {
                id: props.usuarioSeleccionado.usuario.id,
                nombre: pruebasSeleccionadas[i]
            }
            try {
                let ans = await axios.get(`${api.conexion}/pruebas/nombre/${pruebasSeleccionadas[i]}`, config);
                objetosPruebasSeleccionadas.push(ans.data);
                let res = await axios.post(`${api.conexion}/pruebas_hechas/prueba/nombre/id`, body, config);
                historialPruebas.push(res.data);
            } catch (error) {
                setMensajeError(error);
            }
        }
        setHistorialPruebasSeleccionadas(historialPruebas);
        setPruebasSeleccionadasCompletas(objetosPruebasSeleccionadas);
        setViendoEvolutivas(true);
    }

    //CONTADOR USADO PARA RECORRER EL ARRAY DE HISTORIALES DE PRUEBAS SELECCIONADAS
    let contadorPruebas = -1;
    const sumarContadorPruebas = () =>{
        contadorPruebas++;
    }

    const indicarTamañoBarra = (puntuacion, valormax) =>{
        let h = (puntuacion / valormax) * 100;
        return {height: parseInt(h)+"%"}
    }

    //SUMA LOS VALORES NUMERICOS DEL ARRAY DADO
    const sumarArray = (array) =>{
        let resultado = 0;
        for (let i = 0; i < array.length; i++) {
            resultado += parseInt(array[i]);
        }
        return resultado
    }

    return(
        <div className='contenedor_evolutiva contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Pruebas realizadas</h2>
            <div className="pruebas_realizadas flex_fila_arriba_wrap">
                {nombresPruebas.map((prueba)=>{
                    return(
                        <div onClick={(e)=>seleccionarPrueba(e)}>{prueba}</div>
                    )
                })}
            </div>
            <div className="flex_columna">
                <div className="boton" onClick={()=>mostrarGraficas()}>MOSTRAR EVOLUTIVA DE PRUEBAS</div>
            </div>
            <hr />
            <h2>Evolutiva de pruebas seleccionadas</h2>
            {/* SI ESTA TRUE, MUESTRA LAS GRAFICAS */}
            {viendoEvolutivas
            ?
            <div className="evolutivas_mostradas flex_columna_arriba_izquierda">
                {pruebasSeleccionadasCompletas.map((prueba)=>{
                    var puntuacionMaxima = prueba[0].puntuacion_maxima;
                    sumarContadorPruebas()
                    return(
                        <div className="evolutiva_individual">
                            <h3>{prueba[0].nombre}</h3>
                            <div className="evolutiva_total flex_columna_arriba_derecha">
                                <div className="evolutiva_con_valores_izquierda flex_fila_izquierda">
                                    <div className="evolutiva_valores flex_columna_muy_separado">
                                        <div className='valor_individual'>{puntuacionMaxima}</div>
                                        <div className='valor_individual'>{puntuacionMaxima/2}</div>
                                        <div className='valor_individual'>{puntuacionMaxima/3}</div>
                                        <div className='valor_individual'>0</div>
                                    </div>
                                    <div className="evolutiva_grafica flex_fila_muy_separado_abajo">
                                        <div className="barras_horizontales_evolutiva">
                                            <div className='barra_horizontal_border'></div>
                                            <div></div>
                                            <div className='barra_horizontal_border'></div>
                                        </div>
                                        {historialPruebasSeleccionadas[contadorPruebas].map((prueba)=>{
                                            console.log();
                                            return(
                                                <div className="evolutiva_barra" style={indicarTamañoBarra(sumarArray(prueba.puntuacion.split(",")), puntuacionMaxima)}>{sumarArray(prueba.puntuacion.split(","))}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="evolutiva_fechas flex_fila_muy_separado">
                                    {historialPruebasSeleccionadas[contadorPruebas].map((prueba)=>{
                                        return(
                                            <div>
                                                <div>{prueba.createdAt}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            :
            null
            }
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(Evolutiva);