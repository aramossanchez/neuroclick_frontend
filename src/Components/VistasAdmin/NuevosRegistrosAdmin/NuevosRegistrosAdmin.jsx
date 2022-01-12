import React from 'react';

//IMPORTAMOS COMPONENTES PARA CREACIÓN DE REGISTROS
import NuevoRegistroProfesionales from './NuevoRegistroProfesionales';
import NuevoRegistroUsuarios from './NuevoRegistroUsuarios';
import NuevoRegistroAntecedentesFamiliares from './NuevoRegistroAntecedentesFamiliares';
import NuevoRegistroEnfermedades from './NuevoRegistroEnfermedades';
import NuevoRegistroEnfermedadesUsuarios from './NuevoRegistroEnfermedadesUsuarios';
import NuevoRegistroMedicaciones from './NuevoRegistroMedicaciones';
import NuevoRegistroMedicacionesUsuarios from './NuevoRegistroMedicacionesUsuarios';
import NuevoRegistroPruebas from './NuevoRegistroPruebas';
import NuevoRegistroValoraciones from './NuevoRegistroValoraciones';
import NuevoRegistroPruebasValoraciones from './NuevoRegistroPruebasValoraciones';
import NuevoRegistroPruebasHechas from './NuevoRegistroPruebasHechas';

const NuevosRegistrosAdmin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <NuevoRegistroProfesionales vista="profesionales" config={props.config}/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <NuevoRegistroUsuarios vista="usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "antecedentes_familiares"
            ?
            <NuevoRegistroAntecedentesFamiliares vista="antecedentes_familiares" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades"
            ?
            <NuevoRegistroEnfermedades vista="enfermedades" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades_usuarios"
            ?
            <NuevoRegistroEnfermedadesUsuarios vista="enfermedades_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones"
            ?
            <NuevoRegistroMedicaciones vista="medicaciones" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones_usuarios"
            ?
            <NuevoRegistroMedicacionesUsuarios vista="medicaciones_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas"
            ?
            <NuevoRegistroPruebas vista="pruebas" config={props.config}/>
            :
            null
            }
            {props.vista === "valoraciones"
            ?
            <NuevoRegistroValoraciones vista="valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_valoraciones"
            ?
            <NuevoRegistroPruebasValoraciones vista="pruebas_valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_hechas"
            ?
            <NuevoRegistroPruebasHechas vista="pruebas_hechas" config={props.config}/>
            :
            null
            }
        </div>
    )
}
export default NuevosRegistrosAdmin;