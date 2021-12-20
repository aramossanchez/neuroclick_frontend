import React from 'react';
import './HistoriaClinica.scss';

const HistoriaClinica = () =>{

    return(
        <div className='contenedor_historia_clinica contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Datos personales</h2>
            <div className='bloques_historia_clinica flex_fila_muy_separado'>
                <div className="label_historia_clinica_datos flex_columna_izquierda mi">
                    <label htmlFor="nombre_usuario">Nombre:</label>
                    <label htmlFor="apellidos_usuario">Apellidos:</label>
                    <label htmlFor="direccion_usuario">Dirección:</label>
                    <label htmlFor="telefono_usuario">Telefono:</label>
                </div>
                <div className="input_historia_clinica_datos flex_columna_izquierda">
                    <input type="text" name="nombre_usuario" readOnly/>
                    <input type="text" name="apellidos_usuario" readOnly/>
                    <input type="text" name="direccion_usuario" readOnly/>
                    <input type="text" name="telefono_usuario" readOnly/>
                </div>
            </div>
            <hr />
            <h2>Social</h2>
            <div className='bloques_historia_clinica flex_fila_muy_separado'>
                <div className="label_historia_clinica_social flex_columna_izquierda mi">
                    <label htmlFor="pension">Pensión:</label>
                    <label htmlFor="persona_contacto">Persona de contacto:</label>
                    <label htmlFor="telefono_contacto">Teléfono de persona de contacto:</label>
                </div>
                <div className="input_historia_clinica_social flex_columna_izquierda">
                    <input type="text" name="pension" readOnly/>
                    <input type="text" name="persona_contacto" readOnly/>
                    <input type="text" name="telefono_contacto" readOnly/>
                </div>
            </div>
        </div>
    )
}

export default HistoriaClinica;