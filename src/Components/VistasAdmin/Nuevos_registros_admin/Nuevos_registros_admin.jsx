import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import Nuevo_registro_profesionales from './Nuevo_registro_profesionales';
import Nuevo_registro_usuarios from './Nuevo_registro_usuarios';
import Nuevo_registro_antecedentes_familiares from './Nuevo_registro_antecedentes_familiares';
import Nuevo_registro_enfermedades from './Nuevo_registro_enfermedades';
import Nuevo_registro_enfermedades_usuarios from './Nuevo_registro_enfermedades_usuarios';
import Nuevo_registro_medicaciones from './Nuevo_registro_medicaciones';
import Nuevo_registro_medicaciones_usuarios from './Nuevo_registro_medicaciones_usuarios';
import Nuevo_registro_pruebas from './Nuevo_registro_pruebas';
import Nuevo_registro_valoraciones from './Nuevo_registro_valoraciones';
import Nuevo_registro_pruebas_valoraciones from './Nuevo_registro_pruebas_valoraciones';

const Nuevos_registros_admin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <Nuevo_registro_profesionales vista="profesionales" config={props.config}/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <Nuevo_registro_usuarios vista="usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "antecedentes_familiares"
            ?
            <Nuevo_registro_antecedentes_familiares vista="antecedentes_familiares" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades"
            ?
            <Nuevo_registro_enfermedades vista="enfermedades" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades_usuarios"
            ?
            <Nuevo_registro_enfermedades_usuarios vista="enfermedades_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones"
            ?
            <Nuevo_registro_medicaciones vista="medicaciones" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones_usuarios"
            ?
            <Nuevo_registro_medicaciones_usuarios vista="medicaciones_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas"
            ?
            <Nuevo_registro_pruebas vista="pruebas" config={props.config}/>
            :
            null
            }
            {props.vista === "valoraciones"
            ?
            <Nuevo_registro_valoraciones vista="valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_valoraciones"
            ?
            <Nuevo_registro_pruebas_valoraciones vista="pruebas_valoraciones" config={props.config}/>
            :
            null
            }
        </div>
    )
}
export default Nuevos_registros_admin;