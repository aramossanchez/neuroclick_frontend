import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import ActualizarRegistroProfesionales from './ActualizarRegistroProfesionales';
import ActualizarRegistroUsuarios from './ActualizarRegistroUsuarios';
import ActualizarRegistroAntecedentesFamiliares from './ActualizarRegistroAntecedentesFamiliares';
import ActualizarRegistroEnfermedades from './ActualizarRegistroEnfermedades';
import ActualizarRegistroEnfermedadesUsuarios from './ActualizarRegistroEnfermedadesUsuarios';
import ActualizarRegistroMedicaciones from './ActualizarRegistroMedicaciones';
import ActualizarRegistroMedicacionesUsuarios from './ActualizarRegistroMedicacionesUsuarios';
import ActualizarRegistroPruebas from './ActualizarRegistroPruebas';
import ActualizarRegistroValoraciones from './ActualizarRegistroValoraciones';
import ActualizarRegistroPruebasValoraciones from './ActualizarRegistroPruebasValoraciones';
import ActualizarRegistroPruebasHechas from './ActualizarRegistroPruebasHechas';

const ActualizarRegistrosAdmin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <ActualizarRegistroProfesionales vista="profesionales" config={props.config}/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <ActualizarRegistroUsuarios vista="usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "antecedentes_familiares"
            ?
            <ActualizarRegistroAntecedentesFamiliares vista="antecedentes_familiares" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades"
            ?
            <ActualizarRegistroEnfermedades vista="enfermedades" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades_usuarios"
            ?
            <ActualizarRegistroEnfermedadesUsuarios vista="enfermedades_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones"
            ?
            <ActualizarRegistroMedicaciones vista="medicaciones" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones_usuarios"
            ?
            <ActualizarRegistroMedicacionesUsuarios vista="medicaciones_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas"
            ?
            <ActualizarRegistroPruebas vista="pruebas" config={props.config}/>
            :
            null
            }
            {props.vista === "valoraciones"
            ?
            <ActualizarRegistroValoraciones vista="valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_valoraciones"
            ?
            <ActualizarRegistroPruebasValoraciones vista="pruebas_valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_hechas"
            ?
            <ActualizarRegistroPruebasHechas vista="pruebas_hechas" config={props.config}/>
            :
            null
            }
        </div>
    )
}
export default ActualizarRegistrosAdmin;