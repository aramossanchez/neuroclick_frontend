import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Nuevo_registro_profesionales from './Nuevo_registro_profesionales';
import Nuevo_registro_usuarios from './Nuevo_registro_usuarios';
import Nuevo_registro_antecedentes_familiares from './Nuevo_registro_antecedentes_familiares';
import Nuevo_registro_enfermedades from './Nuevo_registro_enfermedades';
import Nuevo_registro_enfermedades_usuarios from './Nuevo_registro_enfermedades_usuarios';

const Nuevos_registros_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Nuevo_registro_profesionales vista="profesionales" config={props.config}/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <Nuevo_registro_usuarios vista="usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "antecedentes_familiares"
            ?
            <Nuevo_registro_antecedentes_familiares vista="antecedentes_familiares" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades"
            ?
            <Nuevo_registro_enfermedades vista="enfermedades" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades_usuarios"
            ?
            <Nuevo_registro_enfermedades_usuarios vista="enfermedades_usuarios" config={props.config}/>
            :
            null
            }
        </div>
    )
}
export default Nuevos_registros_admin;