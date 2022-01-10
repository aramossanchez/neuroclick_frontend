import React from 'react';
import Actualizar_registro_antecedentes_familiares from './Actualizar_registro_antecedentes_familiares';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Actualizar_registro_profesionales from './Actualizar_registro_profesionales';
import Actualizar_registro_usuarios from './Actualizar_registro_usuarios';

const Actualizar_registros_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Actualizar_registro_profesionales vista="profesionales" config={props.config}/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <Actualizar_registro_usuarios vista="usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "antecedentes_familiares"
            ?
            <Actualizar_registro_antecedentes_familiares vista="antecedentes_familiares" config={props.config}/>
            :
            null
            }
        </div>
    )
}
export default Actualizar_registros_admin;