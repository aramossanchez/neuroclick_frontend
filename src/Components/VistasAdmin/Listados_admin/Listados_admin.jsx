import React from 'react';

//IMPORTAMOS COMPONENTES PARA LISTADO DE REGISTROS
import Listado_profesionales from './Listado_profesionales';

const Listados_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Listado_profesionales/>
            :
            null
            }
        </div>
    )
}
export default Listados_admin;