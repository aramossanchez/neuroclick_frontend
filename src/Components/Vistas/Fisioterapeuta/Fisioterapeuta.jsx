import React from 'react';
import './Fisioterapeuta.scss';
import mas from '../../../img/otra-prueba.png'

const Fisioterapeuta = () =>{

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
        <div className='contenedor_fisioterapeuta contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Pruebas de Fisioterapeuta</h2>
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
            <div className='haciendo_prueba flex_columna_arriba_izquierda'></div>
        </div>
    )
}

export default Fisioterapeuta;