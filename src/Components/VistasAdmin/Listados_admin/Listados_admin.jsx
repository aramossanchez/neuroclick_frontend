import React from 'react';

//IMPORTAMOS COMPONENTES PARA LISTADO DE REGISTROS
import Listado_profesionales from './Listado_profesionales';
import Listado_usuarios from './Listado_usuarios';
import Listado_antecedentes_familiares from './Listado_antecedentes_familiares';
import Listado_enfermedades from './Listado_enfermedades';
import Listado_enfermedades_usuarios from './Listado_enfermedades_usuarios';
import Listado_medicaciones from './Listado_medicaciones';
import Listado_medicaciones_usuarios from './Listado_medicaciones_usuarios';

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
            {props.vista === "enfermedades"
            ?
            <Listado_enfermedades/>
            :
            null
            }
            {props.vista === "enfermedades_usuarios"
            ?
            <Listado_enfermedades_usuarios/>
            :
            null
            }
            {props.vista === "medicaciones"
            ?
            <Listado_medicaciones/>
            :
            null
            }
            {props.vista === "medicaciones_usuarios"
            ?
            <Listado_medicaciones_usuarios/>
            :
            null
            }
        </div>
    )
}
export default Listados_admin;