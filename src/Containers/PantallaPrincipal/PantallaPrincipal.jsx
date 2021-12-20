import React from 'react';
import './PantallaPrincipal.scss';
import Header from '../../Components/Header/Header.jsx'

const PantallaPrincipal = () =>{
    return(
        <div className='contenedor_principal contenedor flex_columna_muy_separado'>
            <Header/>
            <div className="bloques_principal flex_fila_mas_separado">
                <div className="contenedor_izq bloque_principal flex_columna_muy_separado">
                    <h2>Usuarios</h2>
                    <div className="campo_formulario">
                        <input type="email" name="buscar" placeholder='Buscar usuario'/>
                    </div>
                    <div className='contenedor_usuarios'>

                    </div>
                </div>
                <div className="contenedor_der bloque_principal">
                    <div className="pestañas flex_fila_izquierda">
                        <div className="pestaña pestaña_activa">Historia Clínica</div>
                        <div className="pestaña pestaña_no_activa">Datos Médicos</div>
                        <div className="pestaña pestaña_no_activa">Fisioterapeuta</div>
                        <div className="pestaña pestaña_no_activa">T. Ocupacional</div>
                        <div className="pestaña pestaña_no_activa">Neuropsicologa</div>
                        <div className="pestaña pestaña_no_activa">Logopeda</div>
                        <div className="pestaña pestaña_no_activa">Evolutiva</div>
                        <div className="pestaña pestaña_no_activa">Seguimientos</div>
                        <div className="pestaña pestaña_no_activa">Agenda</div>
                        <div className="pestaña pestaña_no_activa">Informes</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PantallaPrincipal;