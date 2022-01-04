import React from 'react';
import './DatosMedicos.scss';
import { connect } from 'react-redux';
import Api from '../../../api/api';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const DatosMedicos = (props) =>{

    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    //ANTECEDENTES FAMILIARES DEL USUARIO
    const[antecedentes, setAntecedentes] = useState("");
    //ENFERMEDADES DEL USUARIO
    const[enfermedadesUsuario, setEnfermedadesUsuario] = useState([]);
    //MEDICACIONES DEL USUARIO
    const[medicacionesUsuario, setMedicacionesUsuario] = useState([]);
    //MENSAJE DE ERROR
    const[mensajeError, setMensajeError] = useState("");

    useEffect(()=>{
        antecedentesFamiliares();
        enfermedades();
        medicaciones();
    }, []);

    //CABECERA PARA MANDAR EL TOKEN EN LAS PETICIONES A LA BASE DE DATOS
    let config = {
        headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
    };

    //CÁLCULO DE EDAD DEL USUARIO
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear()
    let fechaDeNacimiento = new Date(props.usuarioSeleccionado.usuario.fecha_nacimiento);
    let añoNacimiento = fechaDeNacimiento.getFullYear();

    //OBTENER ANTECEDENTES FAMILIARES
    const antecedentesFamiliares = async() =>{
        try {
            let res = await axios.get(`${api.conexion}/antecedentes_familiares/${props.usuarioSeleccionado.usuario.id}`, config);
            setAntecedentes(res.data.descripcion);
        } catch (error) {
            setMensajeError(error);
        }
    }
    
    //OBTENER ENFERMEDADES
    const enfermedades = async() =>{
        try {
            let res = await axios.get(`${api.conexion}/enfermedades_usuarios/usuario/${props.usuarioSeleccionado.usuario.id}`, config);
            setEnfermedadesUsuario(res.data);
        } catch (error) {
            setMensajeError(error);
        }
    }

    //OBTENER MEDICACIONES
    const medicaciones = async() =>{
        try {
            let res = await axios.get(`${api.conexion}/medicaciones_usuarios/usuario/${props.usuarioSeleccionado.usuario.id}`, config);
            setMedicacionesUsuario(res.data);
        } catch (error) {
            setMensajeError(error);
        }
    }

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
                {antecedentes}
            </div>
            <hr />
            <h2>Enfermedades</h2>
            <div className='bloque_multiples_datos_medicos mi'>
                {enfermedadesUsuario.map((enfermedad)=>{
                    return(
                        <div key={enfermedad.id}>{enfermedad.enfermedade.nombre}</div>
                    )
                })}
            </div>
            <hr />
            <h2>Medicación actual</h2>
            <div className='bloque_multiples_datos_medicos mi'>
                {medicacionesUsuario.map((medicacion)=>{
                    return(
                        <div key={medicacion.id}>{medicacion.medicacione.nombre}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default connect((state)=>({
    usuarioSeleccionado: state.usuarioSeleccionado,
    profesionalLogado: state.profesionalLogado
}))(DatosMedicos);