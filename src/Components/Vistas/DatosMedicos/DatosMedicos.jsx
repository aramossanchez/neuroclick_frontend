import React from 'react';
import './DatosMedicos.scss';
import { connect } from 'react-redux';

const DatosMedicos = (props) =>{

    //CÁLCULO DE EDAD DEL USUARIO
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear()
    let fechaDeNacimiento = new Date(props.usuarioSeleccionado.usuario.fecha_nacimiento);
    let añoNacimiento = fechaDeNacimiento.getFullYear();

    return(
        <div className='contenedor_datos_medicos contenedor_vista flex_columna_arriba_izquierda'>
            <h2>Datos médicos</h2>
            <div className="datos_medicos_usuario flex_fila_izquierda mi">
                <label htmlFor="edad">Edad:</label>
                <input type="email" name="edad" readOnly value={añoActual - añoNacimiento}/>
                <label htmlFor="peso">Peso:</label>
                <input type="email" name="peso" readOnly value={props.usuarioSeleccionado.usuario.peso}/>
                <label htmlFor="estatura">Estatura:</label>
                <input type="email" name="estatura" readOnly value={props.usuarioSeleccionado.usuario.estatura}/>
            </div>
            <hr />
            <h2>Antecedentes familiares</h2>
            <div className='bloque_multiples_datos_medicos mi'>

            </div>
            <hr />
            <h2>Enfermedades</h2>
            <div className='bloque_multiples_datos_medicos mi'>

            </div>
            <hr />
            <h2>Medicación actual</h2>
            <div className='bloque_multiples_datos_medicos mi'>

            </div>
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado
}))(DatosMedicos);