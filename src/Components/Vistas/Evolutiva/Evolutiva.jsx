import React from 'react';
import './Evolutiva.scss';

const Evolutiva = () =>{

    const seleccionarPrueba = (e) =>{
        if (e.target.classList.contains('prueba_seleccionada')) {
            e.target.classList.remove('prueba_seleccionada');
            return
        }else{
            e.target.classList.add('prueba_seleccionada');
            return
        }
    }

    const indicarTamañoBarra = (puntuacion, valormax) =>{
        let h = (puntuacion / valormax) * 100;
        console.log(parseInt(h))
        return {height: parseInt(h)+"%"}
    }

    return(
        <div className='contenedor_evolutiva contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Pruebas realizadas</h2>
            <div className="pruebas_realizadas flex_fila_arriba_wrap">
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba1</div>
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba2</div>
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba3</div>
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba4</div>
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba5</div>
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba6</div>
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba7</div>
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba8</div>
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba9</div>
                <div onClick={(e)=>seleccionarPrueba(e)}>- Prueba10</div>
            </div>
            <div className="flex_columna">
                <div className="boton">MOSTRAR EVOLUTIVA DE PRUEBAS</div>
            </div>
            <hr />
            <h2>Evolutiva de pruebas seleccionadas</h2>
            <div className="evolutivas_mostradas flex_columna_arriba_izquierda">
                <div className="evolutiva_individual">
                    <h3>Prueba7</h3>
                    <div className="evolutiva_total flex_columna_arriba_derecha">
                        <div className="evolutiva_con_valores_izquierda flex_fila_izquierda">
                            <div className="evolutiva_valores flex_columna_muy_separado">
                                <div className='valor_individual'>30</div>
                                <div className='valor_individual'>20</div>
                                <div className='valor_individual'>10</div>
                                <div className='valor_individual'>0</div>
                            </div>
                            <div className="evolutiva_grafica flex_fila_muy_separado_abajo">
                                <div className="barras_horizontales_evolutiva">
                                    <div className='barra_horizontal_border'></div>
                                    <div></div>
                                    <div className='barra_horizontal_border'></div>
                                </div>
                                <div className="evolutiva_barra" style={indicarTamañoBarra(15, 30)}></div>
                                <div className="evolutiva_barra" style={indicarTamañoBarra(20, 30)}></div>
                                <div className="evolutiva_barra" style={indicarTamañoBarra(25, 30)}></div>
                            </div>
                        </div>
                        <div className="evolutiva_fechas flex_fila_muy_separado">
                            <div>19/02/2020</div>
                            <div>19/05/2020</div>
                            <div>19/08/2020</div>
                        </div>
                    </div>
                </div>
                <div className="evolutiva_individual">
                    <h3>Prueba4</h3>
                    <div className="evolutiva_total flex_columna_arriba_derecha">
                        <div className="evolutiva_con_valores_izquierda flex_fila_izquierda">
                            <div className="evolutiva_valores flex_columna_muy_separado">
                                <div className='valor_individual'>40</div>
                                <div className='valor_individual'>26</div>
                                <div className='valor_individual'>13</div>
                                <div className='valor_individual'>0</div>
                            </div>
                            <div className="evolutiva_grafica flex_fila_muy_separado_abajo">
                                <div className="barras_horizontales_evolutiva">
                                    <div className='barra_horizontal_border'></div>
                                    <div></div>
                                    <div className='barra_horizontal_border'></div>
                                </div>
                                <div className="evolutiva_barra" style={indicarTamañoBarra(10, 40)}></div>
                                <div className="evolutiva_barra" style={indicarTamañoBarra(34, 40)}></div>
                                <div className="evolutiva_barra" style={indicarTamañoBarra(29, 40)}></div>
                            </div>
                        </div>
                        <div className="evolutiva_fechas flex_fila_muy_separado">
                            <div>19/02/2020</div>
                            <div>19/05/2020</div>
                            <div>19/08/2020</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evolutiva;