import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Actualizar_registro_profesionales from './Actualizar_registro_profesionales';
import Actualizar_registro_usuarios from './Actualizar_registro_usuarios';
import Actualizar_registro_antecedentes_familiares from './Actualizar_registro_antecedentes_familiares';
import Actualizar_registro_enfermedades from './Actualizar_registro_enfermedades';
import Actualizar_registro_enfermedades_usuarios from './Actualizar_registro_enfermedades_usuarios';
import Actualizar_registro_medicaciones from './Actualizar_registro_medicaciones';
import Actualizar_registro_medicaciones_usuarios from './Actualizar_registro_medicaciones_usuarios';
import Actualizar_registro_pruebas from './Actualizar_registro_pruebas';
import Actualizar_registro_valoraciones from './Actualizar_registro_valoraciones';
import Actualizar_registro_pruebas_valoraciones from './Actualizar_registro_pruebas_valoraciones';

const Actualizar_registros_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Actualizar_registro_profesionales vista="profesionales" config={props.config}/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <Actualizar_registro_usuarios vista="usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "antecedentes_familiares"
            ?
            <Actualizar_registro_antecedentes_familiares vista="antecedentes_familiares" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades"
            ?
            <Actualizar_registro_enfermedades vista="enfermedades" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades_usuarios"
            ?
            <Actualizar_registro_enfermedades_usuarios vista="enfermedades_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones"
            ?
            <Actualizar_registro_medicaciones vista="medicaciones" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones_usuarios"
            ?
            <Actualizar_registro_medicaciones_usuarios vista="medicaciones_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas"
            ?
            <Actualizar_registro_pruebas vista="pruebas" config={props.config}/>
            :
            null
            }
            {props.vista === "valoraciones"
            ?
            <Actualizar_registro_valoraciones vista="valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_valoraciones"
            ?
            <Actualizar_registro_pruebas_valoraciones vista="pruebas_valoraciones" config={props.config}/>
            :
            null
            }
        </div>
    )
}
export default Actualizar_registros_admin;