import React from 'react';

//IMPORTAMOS COMPONENTES PARA LISTADO DE REGISTROS
import Listado_profesionales from './Listado_profesionales';
import Listado_usuarios from './Listado_usuarios';

const Listados_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Listado_profesionales/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <Listado_usuarios/>
            :
            null
            }
        </div>
    )
}
export default Listados_admin;