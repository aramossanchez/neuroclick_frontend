import React, { useEffect, useState } from 'react';
import './Informe.scss';
import { useNavigate } from 'react-router-dom';

const Informe = () =>{

    const navigate = useNavigate();

    const volver = () =>{
        navigate("/aplicacion");
    }

    const seleccionarPrueba = (e) =>{
        if (e.target.classList.contains('prueba_seleccionada')) {
            e.target.classList.remove('prueba_seleccionada');
            return
        }else{
            e.target.classList.add('prueba_seleccionada');
            return
        }
    }

    const abrirHistoricoPrueba = (e, historico) =>{
        let lista = document.getElementById(historico);
        if (lista.classList.contains('abierta')) {
            lista.style.maxHeight="0em";
            lista.style.transform="scaleY(0)";
            lista.classList.remove('abierta');
            return  
        }
        else{
            lista.style.maxHeight="none";
            lista.style.transform="scaleY(1)";
            lista.classList.add('abierta');
            return
        }
    }

    return(
        <div className='contenedor_informe contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Informe</h2>
            <div className="bloque_informe flex_columna_izquierda">
                <h3>Motivo de informe:</h3>
                <textarea></textarea>
                <hr />
                <h3>Valoración:</h3>
                <textarea></textarea>
                <hr />
                <h3>Pruebas aportadas:</h3>
                <div className="pruebas_realizadas flex_fila_arriba_wrap">
                    <div className="prueba_individual flex_columna_arriba_izquierda">
                        <div className="detalles_prueba flex_columna_arriba_izquierda">
                            <div className='nombre_prueba' onClick={(e)=>abrirHistoricoPrueba(e, 'historico_prueba_4')}>- Prueba4</div>
                        </div>
                        <div className='historico_prueba' id="historico_prueba_4">
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-12-2020</div>
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-03-2021</div>
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-06-2021</div>
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-09-2021</div>
                        </div>
                    </div>
                    <div className="prueba_individual flex_columna_arriba_izquierda">
                        <div className="detalles_prueba flex_columna_arriba_izquierda">
                            <div className='nombre_prueba' onClick={(e)=>abrirHistoricoPrueba(e, 'historico_prueba_5')}>- Prueba5</div>
                        </div>
                        <div className='historico_prueba' id="historico_prueba_5">
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-12-2020</div>
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-03-2021</div>
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-06-2021</div>
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-09-2021</div>
                        </div>
                    </div>
                    <div className="prueba_individual flex_columna_arriba_izquierda">
                        <div className="detalles_prueba flex_columna_arriba_izquierda">
                            <div className='nombre_prueba' onClick={(e)=>abrirHistoricoPrueba(e, 'historico_prueba_6')}>- Prueba6</div>
                        </div>
                        <div className='historico_prueba' id="historico_prueba_6">
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-12-2020</div>
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-03-2021</div>
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-06-2021</div>
                            <div onClick={(e)=>seleccionarPrueba(e)}>Prueba realizada el 12-09-2021</div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className='flex_columna'>
                <div className="boton">GUARDAR INFORME</div>
            </div>
        </div>
    )
}

export default Informe;