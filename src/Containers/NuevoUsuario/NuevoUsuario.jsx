import React, { useEffect, useState } from 'react';
import './NuevoUsuario.scss';
import { useNavigate } from 'react-router-dom';

const NuevoUsuario = () =>{

    const navigate = useNavigate();

    const volver = () =>{
        navigate("/aplicacion");
    }

    return(
        <div className='contenedor_nuevo_usuario contenedor'>
            <h2>NUEVO USUARIO</h2>
            <div className='flex_fila_arriba_separado_wrap'>
                <div className='bloque_rellenar'>
                    <h2>Datos personales</h2>
                    <hr />
                    <div className='bloques_historia_clinica flex_fila_muy_separado'>
                        <div className="label_historia_clinica_datos flex_columna_izquierda mi">
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
                        <div className="input_historia_clinica_datos flex_columna_izquierda">
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
                <div className='bloque_rellenar'>
                    <h2>Social</h2>
                    <hr />
                    <div className='bloques_historia_clinica flex_fila_muy_separado'>
                        <div className="label_historia_clinica_social flex_columna_izquierda mi">
                            <label htmlFor="pension">Pensión:</label>
                            <label htmlFor="persona_contacto">Persona de contacto:</label>
                            <label htmlFor="telefono_contacto">Teléfono de persona de contacto:</label>
                        </div>
                        <div className="input_historia_clinica_social flex_columna_izquierda">
                            <input type="text" name="pension"/>
                            <input type="text" name="persona_contacto"/>
                            <input type="text" name="telefono_contacto"/>
                        </div>
                    </div>
                    <h2>Datos médicos</h2>
                    <hr />
                    <div className='bloques_historia_clinica flex_fila_muy_separado'>
                        <div className="label_datos_medicos flex_columna_izquierda mi">
                            <label htmlFor="edad">Edad:</label>
                            <label htmlFor="peso">Peso:</label>
                            <label htmlFor="estatura">Estatura:</label>
                        </div>
                        <div className="input_datos_medicos flex_columna_izquierda">
                            <input type="text" name="edad"/>
                            <input type="text" name="peso"/>
                            <input type="text" name="estatura"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex_fila_separado ma'>
                <div className="boton">GUARDAR</div>
                <div className="boton" onClick={()=>volver()}>VOLVER A PANTALLA INICIAL</div>
            </div>
        </div>
    )
}

export default NuevoUsuario;