import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Nuevo_registro_profesionales from './Nuevo_registro_profesionales';

const Nuevos_registros_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Nuevo_registro_profesionales/>
            :
            null
            }
        </div>
    )
}
export default Nuevos_registros_admin;