import React, { useEffect, useState } from 'react';
import './NuevoProfesional.scss';
import { useNavigate } from 'react-router-dom';

const NuevoProfesional = () =>{

    const navigate = useNavigate();

    const volver = () =>{
        navigate("/aplicacion");
    }

    return(
        <div className='contenedor_nuevo_profesional contenedor flex_columna_arriba'>
            <h2>NUEVO PROFESIONAL</h2>
            <div className='bloque_rellenar'>
                <h2>Datos de profesional</h2>
                <hr />
                <div className='bloques_nuevo_profesional flex_fila_muy_separado'>
                    <div className="label_nuevo_profesional flex_columna_izquierda mi">
                        <label htmlFor="email">Email:</label>
                        <label htmlFor="contraseña">Contraseña:</label>
                        <label htmlFor="puesto">Puesto:</label>
                        <label htmlFor="nombre">Nombre:</label>
                        <label htmlFor="apellidos">Apellidos:</label>
                        <label htmlFor="telefono">Teléfono:</label>
                        <label htmlFor="calle">Calle:</label>
                        <label htmlFor="portal">Portal:</label>
                        <label htmlFor="piso">Piso:</label>
                        <label htmlFor="puerta">Puerta:</label>
                        <label htmlFor="ciudad">Ciudad:</label>
                        <label htmlFor="provincia">Provincia:</label>
                        <label htmlFor="codigopostal">Codigo Postal:</label>
                    </div>
                    <div className="input_nuevo_profesional flex_columna_izquierda">
                        <input type="text" name="email"/>
                        <input type="text" name="contraseña"/>
                        <input type="text" name="puesto"/>
                        <input type="text" name="nombre"/>
                        <input type="text" name="apellidos"/>
                        <input type="text" name="telefono"/>
                        <input type="text" name="calle"/>
                        <input type="text" name="portal"/>
                        <input type="text" name="piso"/>
                        <input type="text" name="puerta"/>
                        <input type="text" name="ciudad"/>
                        <input type="text" name="provincia"/>
                        <input type="text" name="codigopostal"/>
                    </div>
                </div>
            </div>
            <div className='flex_fila_separado ma ancho50'>
                <div className="boton">GUARDAR</div>
                <div className="boton" onClick={()=>volver()}>VOLVER A PANTALLA INICIAL</div>
            </div>
        </div>
    )
}

export default NuevoProfesional;