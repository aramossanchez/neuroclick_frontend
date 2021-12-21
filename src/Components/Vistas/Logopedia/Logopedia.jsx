import React from 'react';
import './Logopedia.scss';
import '.././VistasProfesiones.scss';

const Logopedia = () =>{

    const abrirHistoricoPrueba = (e, historico) =>{
        let lista = document.getElementById(historico);
        if (lista.classList.contains('abierta')) {
            lista.style.maxHeight="0em";
            lista.style.transform="scaleY(0)";
            lista.classList.remove('abierta');
            e.target.innerHTML = "Ver historial";
            return  
        }
        else{
            lista.style.maxHeight="none";
            lista.style.transform="scaleY(1)";
            lista.classList.add('abierta');
            e.target.innerHTML = "Ocultar historial";
            return
        }
    }

    return(
        <div className='contenedor_logopedia contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Pruebas de Logopedia</h2>
            <div className="bloque_pruebas flex_fila_arriba_izquierda">
                <div className='pruebas_disponibles flex_columna_arriba_izquierda mi'>
                    {/* PRUEBAS LANZABLES Y SUS HISTORIALES */}
                    <div className="prueba_individual flex_columna_arriba_izquierda mi">
                        <div className="detalles_prueba flex_columna_arriba_izquierda">
                            <div className='nombre_prueba'>- Prueba1</div>
                            <div className="acciones_prueba flex_fila_izquierda">
                                <div className='boton' onClick={(e)=>abrirHistoricoPrueba(e, 'historico_prueba_1')}>Ver historial</div>
                                <div className='boton'>Añadir prueba</div>
                            </div>
                        </div>
                        <div className='historico_prueba' id="historico_prueba_1">
                            <div className=''>Prueba realizada el 12-12-2020</div>
                            <div className=''>Prueba realizada el 12-03-2021</div>
                            <div className=''>Prueba realizada el 12-06-2021</div>
                            <div className=''>Prueba realizada el 12-09-2021</div>
                        </div>
                    </div>
                    <div className="prueba_individual flex_columna_arriba_izquierda mi">
                        <div className="detalles_prueba flex_columna_arriba_izquierda">
                            <div className='nombre_prueba'>- Prueba2</div>
                            <div className="acciones_prueba flex_fila_izquierda">
                                <div className='boton' onClick={(e)=>abrirHistoricoPrueba(e, 'historico_prueba_2')}>Ver historial</div>
                                <div className='boton'>Añadir prueba</div>
                            </div>
                        </div>
                        <div className='historico_prueba' id="historico_prueba_2">
                            <div className=''>Prueba realizada el 12-12-2020</div>
                            <div className=''>Prueba realizada el 12-03-2021</div>
                            <div className=''>Prueba realizada el 12-06-2021</div>
                            <div className=''>Prueba realizada el 12-09-2021</div>
                        </div>
                    </div>
                    <div className="prueba_individual flex_columna_arriba_izquierda mi">
                        <div className="detalles_prueba flex_columna_arriba_izquierda">
                            <div className='nombre_prueba'>- Prueba3</div>
                            <div className="acciones_prueba flex_fila_izquierda">
                                <div className='boton' onClick={(e)=>abrirHistoricoPrueba(e, 'historico_prueba_3')}>Ver historial</div>
                                <div className='boton'>Añadir prueba</div>
                            </div>
                        </div>
                        <div className='historico_prueba' id="historico_prueba_3">
                            <div className=''>Prueba realizada el 12-12-2020</div>
                            <div className=''>Prueba realizada el 12-03-2021</div>
                            <div className=''>Prueba realizada el 12-06-2021</div>
                            <div className=''>Prueba realizada el 12-09-2021</div>
                        </div>
                    </div>
                    <div className="prueba_individual flex_columna_arriba_izquierda mi">
                        <div className="detalles_prueba flex_columna_arriba_izquierda">
                            <div className='nombre_prueba'>- Prueba4</div>
                            <div className="acciones_prueba flex_fila_izquierda">
                                <div className='boton' onClick={(e)=>abrirHistoricoPrueba(e, 'historico_prueba_4')}>Ver historial</div>
                                <div className='boton'>Añadir prueba</div>
                            </div>
                        </div>
                        <div className='historico_prueba' id="historico_prueba_4">
                            <div className=''>Prueba realizada el 12-12-2020</div>
                            <div className=''>Prueba realizada el 12-03-2021</div>
                            <div className=''>Prueba realizada el 12-06-2021</div>
                            <div className=''>Prueba realizada el 12-09-2021</div>
                        </div>
                    </div>
                </div>
                {/* PRUEBA ACTUAL */}
                <div className="bloque_prueba_actual flex_columna_arriba_izquierda">
                    <h3>Nueva Prueba1</h3>
                    <div className="prueba_actual">
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración1</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion1" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion1" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion1" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion1" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración2</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion2" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion2" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion2" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion2" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración3</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion3" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion3" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion3" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion3" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración4</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion4" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion4" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion4" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion4" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración5</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion5" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion5" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion5" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion5" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración6</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion6" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion6" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion6" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion6" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración7</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion7" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion7" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion7" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion7" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración8</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion8" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion8" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion8" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion8" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración9</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion9" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion9" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion9" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion9" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración10</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion10" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion10" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion10" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion10" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                        <div className="pregunta_individual flex_fila_muy_separado">
                            <div className='pregunta_prueba'>Valoración11</div>
                            <div className="puntuacion_prueba">
                                <label>
                                    <input type="radio" name="valoracion11" value="1"/>Muy bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion11" value="2"/>Bajo
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion11" value="3"/>Medio
                                    <i></i>
                                </label>
                                <label>
                                    <input type="radio" name="valoracion11" value="4"/>Alto
                                    <i></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex_columna'>
                        <div className="boton">GUARDAR PRUEBA</div>
                    </div>
                </div>
            </div>
            <div className='haciendo_prueba flex_columna_arriba_izquierda'></div>
        </div>
    )
}

export default Logopedia;