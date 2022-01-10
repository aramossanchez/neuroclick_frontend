import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Borrando_registro_profesionales from './Borrando_registro_profesionales';

const Borrando_registros_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Borrando_registro_profesionales/>
            :
            null
            }
        </div>
    )
}
export default Borrando_registros_admin;