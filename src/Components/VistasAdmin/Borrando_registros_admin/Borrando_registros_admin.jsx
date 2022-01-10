import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Borrando_registro_profesionales from './Borrando_registro_profesionales';
import Borrando_registro_usuarios from './Borrando_registro_usuarios';

const Borrando_registros_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Borrando_registro_profesionales vista="profesionales" config={props.config}/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <Borrando_registro_usuarios vista="usuarios" config={props.config}/>
            :
            null
            }
        </div>
    )
}
export default Borrando_registros_admin;