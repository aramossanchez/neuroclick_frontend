import React from 'react';

//IMPORTAMOS COMPONENTES PARA LISTADO DE REGISTROS
import Listado_profesionales from './Listado_profesionales';
import Listado_usuarios from './Listado_usuarios';
import Listado_antecedentes_familiares from './Listado_antecedentes_familiares';

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
            {props.vista === "antecedentes_familiares"
            ?
            <Listado_antecedentes_familiares/>
            :
            null
            }
        </div>
    )
}
export default Listados_admin;