import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Nuevo_registro_profesionales from './Nuevo_registro_profesionales';
import Nuevo_registro_usuarios from './Nuevo_registro_usuarios';
import Nuevo_registro_antecedentes_familiares from './Nuevo_registro_antecedentes_familiares';

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
        </div>
    )
}
export default Nuevos_registros_admin;