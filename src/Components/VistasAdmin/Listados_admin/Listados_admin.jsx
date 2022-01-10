import React from 'react';

//IMPORTAMOS COMPONENTES PARA LISTADO DE REGISTROS
import Listado_profesionales from './Listado_profesionales';
import Listado_usuarios from './Listado_usuarios';
import Listado_antecedentes_familiares from './Listado_antecedentes_familiares';
import Listado_enfermedades from './Listado_enfermedades';
import Listado_enfermedades_usuarios from './Listado_enfermedades_usuarios';
import Listado_medicaciones from './Listado_medicaciones';
import Listado_medicaciones_usuarios from './Listado_medicaciones_usuarios';
import Listado_pruebas from './Listado_pruebas';
import Listado_valoraciones from './Listado_valoraciones';
import Listado_pruebas_valoraciones from './Listado_pruebas_valoraciones';
import Listado_pruebas_hechas from './Listado_pruebas_hechas';

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
            {props.vista === "pruebas"
            ?
            <Listado_pruebas/>
            :
            null
            }
            {props.vista === "valoraciones"
            ?
            <Listado_valoraciones/>
            :
            null
            }
            {props.vista === "pruebas_valoraciones"
            ?
            <Listado_pruebas_valoraciones/>
            :
            null
            }
            {props.vista === "pruebas_hechas"
            ?
            <Listado_pruebas_hechas/>
            :
            null
            }
        </div>
    )
}
export default Listados_admin;