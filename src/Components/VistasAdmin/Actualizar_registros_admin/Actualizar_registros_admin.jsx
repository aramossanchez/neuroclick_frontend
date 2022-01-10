import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Actualizar_registro_profesionales from './Actualizar_registro_profesionales';

const Actualizar_registros_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Actualizar_registro_profesionales/>
            :
            null
            }
        </div>
    )
}
export default Actualizar_registros_admin;