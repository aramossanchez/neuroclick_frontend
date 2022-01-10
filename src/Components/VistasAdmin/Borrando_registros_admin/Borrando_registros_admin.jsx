import React from 'react';
import Borrando_registro_antecendetes_familiares from './Borrando_registro_antecendetes_familiares';
import Borrando_registro_enfermedades from './Borrando_registro_enfermedades';
import Borrando_registro_enfermedades_usuarios from './Borrando_registro_enfermedades_usuarios';
import Borrando_registro_medicaciones from './Borrando_registro_medicaciones';
import Borrando_registro_medicaciones_usuarios from './Borrando_registro_medicaciones_usuarios';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Borrando_registro_profesionales from './Borrando_registro_profesionales';
import Borrando_registro_pruebas from './Borrando_registro_pruebas';
import Borrando_Registro_Pruebas_Hechas from './Borrando_Registro_Pruebas_Hechas';
import Borrando_registro_pruebas_valoraciones from './Borrando_registro_pruebas_valoraciones';
import Borrando_registro_usuarios from './Borrando_registro_usuarios';
import Borrando_registro_valoraciones from './Borrando_registro_valoraciones';

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
            {props.vista === "antecedentes_familiares"
            ?
            <Borrando_registro_antecendetes_familiares vista="antecedentes_familiares" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades"
            ?
            <Borrando_registro_enfermedades vista="enfermedades" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades_usuarios"
            ?
            <Borrando_registro_enfermedades_usuarios vista="enfermedades_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones"
            ?
            <Borrando_registro_medicaciones vista="medicaciones" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones_usuarios"
            ?
            <Borrando_registro_medicaciones_usuarios vista="medicaciones_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas"
            ?
            <Borrando_registro_pruebas vista="pruebas" config={props.config}/>
            :
            null
            }
            {props.vista === "valoraciones"
            ?
            <Borrando_registro_valoraciones vista="valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_valoraciones"
            ?
            <Borrando_registro_pruebas_valoraciones vista="pruebas_valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_hechas"
            ?
            <Borrando_Registro_Pruebas_Hechas vista="pruebas_hechas" config={props.config}/>
            :
            null
            }
        </div>
    )
}
export default Borrando_registros_admin;