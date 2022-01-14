import React, { useEffect, useState } from 'react';
import './Usuarios.scss';
import { connect } from 'react-redux';
import { USUARIO } from '../../redux/types';
import { VISTASELECCIONADA } from '../../redux/types';
import axios from 'axios';
import Api from '../../api/api';

const Usuarios = (props) =>{
    
    //GUARDA URL DE LA API
    let api = new Api();

    //HOOKS
    const [listadoUsuarios, setListadoUsuarios] = useState([]);
    const [listadoUsuariosFiltrados, setListadoUsuariosFiltrados] = useState([]);
    const [mensajeError, setMensajeError] = useState("");

    //AL CARGAR EL COMPONENTE, GUARDA LISTADO DE USUARIOS EN EL HOOK
    useEffect(()=>{
        traerListaUsuarios();
    }, [])
    
    //AL DETECTAR UN CAMBIO EN EL USUARIO SELECCIONADO GUARDADO EN REDUX, RECARGA LA LISTA DE USUARIOS POR SI HA HABIDO ALGÚN CAMBIO EN LOS DATOS
    useEffect(()=>{
        traerListaUsuarios();
    }, [props.usuarioSeleccionado])

    //OBTIENE LISTADO DE USUARIOS DE LA BASE DE DATOS
    const traerListaUsuarios = async () =>{
        let config = {
            headers: { Authorization: `Bearer ${props.profesionalLogado.login.token}` }
        };
        try {

            let res = await axios.get(`${api.conexion}/usuarios`, config);
            setListadoUsuarios(res.data);
            setListadoUsuariosFiltrados(res.data);

        } catch (error) {

            //SETEA MENSAJE DE ERROR
            setMensajeError("Ha habido un error al intentar acceder al listado completo de usuarios");
            //TRAS 4 SEGUNDOS, HACE DESAPARECER EL MENSAJE
            setTimeout(() => {
                setMensajeError("");
            }, 4000);

        }
    }

    //GUARDAR USUARIO SELECCIONADO EN REDUX
    const elegirUsuario = (usuario, e) =>{
        props.dispatch({type:USUARIO, payload: usuario});
        props.dispatch({type:VISTASELECCIONADA, payload: "historiaclinica"});
        //CAMBIAR CLASE PARA MARCAR CUAL USUARIO ESTÁ SELECCIONADO
        let usuarios = document.getElementsByClassName('usuario_individual');
        for (let i = 0; i < usuarios.length; i++) {
            usuarios[i].classList.remove('usuario_seleccionado')
        }
        e.target.classList.add('usuario_seleccionado');
    }

    //BUSCAR USUARIO POR NOMBRE Y APELLIDOS
    const buscarUsuario = (e) =>{
        let usuarios = listadoUsuarios.filter(usuario => usuario.nombre.toLowerCase().includes(e.target.value) || usuario.apellidos.toLowerCase().includes(e.target.value))
        setListadoUsuariosFiltrados(usuarios);
    }

    return(
        <div className="contenedor_izq bloque_principal flex_columna_muy_separado">
            <h2>Usuarios</h2>
            <div className="campo_formulario">
                <input type="text" name="buscar" placeholder='Buscar usuario' onChange={(e)=>buscarUsuario(e)}/>
            </div>
            <div className='contenedor_usuarios flex_columna_arriba_izquierda'>
                {listadoUsuariosFiltrados.map((usuario)=>{
                    return(
                        <div key={usuario.id} className='usuario_individual' onClick={(e)=>elegirUsuario(usuario, e)}>
                            {usuario.apellidos}, {usuario.nombre} 
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default connect((state)=>({
    profesionalLogado: state.profesionalLogado,
    usuarioSeleccionado: state.usuarioSeleccionado,
}))(Usuarios);