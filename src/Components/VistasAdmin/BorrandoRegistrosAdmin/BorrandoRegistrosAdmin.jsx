import React from 'react';
import BorrandoRegistroAntecedentesFamiliares from './BorrandoRegistroAntecedentesFamiliares';
import BorrandoRegistroEnfermedades from './BorrandoRegistroEnfermedades';
import BorrandoRegistroEnfermedadesUsuarios from './BorrandoRegistroEnfermedadesUsuarios';
import BorrandoRegistroMedicaciones from './BorrandoRegistroMedicaciones';
import BorrandoRegistroMedicacionesUsuarios from './BorrandoRegistroMedicacionesUsuarios';
import BorrandoRegistroProfesionales from './BorrandoRegistroProfesionales';
import BorrandoRegistroSeguimientos from './BorrandoRegistroSeguimientos';
import BorrandoRegistroPruebas from './BorrandoRegistroPruebas';
import BorrandoRegistroPruebasHechas from './BorrandoRegistroPruebasHechas';
import BorrandoRegistroPruebasValoraciones from './BorrandoRegistroPruebasValoraciones';
import BorrandoRegistroUsuarios from './BorrandoRegistroUsuarios';
import BorrandoRegistroValoraciones from './BorrandoRegistroValoraciones';

const BorrandoRegistrosAdmin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <BorrandoRegistroProfesionales vista="profesionales" config={props.config}/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <BorrandoRegistroUsuarios vista="usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "antecedentes_familiares"
            ?
            <BorrandoRegistroAntecedentesFamiliares vista="antecedentes_familiares" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades"
            ?
            <BorrandoRegistroEnfermedades vista="enfermedades" config={props.config}/>
            :
            null
            }
            {props.vista === "enfermedades_usuarios"
            ?
            <BorrandoRegistroEnfermedadesUsuarios vista="enfermedades_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones"
            ?
            <BorrandoRegistroMedicaciones vista="medicaciones" config={props.config}/>
            :
            null
            }
            {props.vista === "medicaciones_usuarios"
            ?
            <BorrandoRegistroMedicacionesUsuarios vista="medicaciones_usuarios" config={props.config}/>
            :
            null
            }
            {props.vista === "seguimientos"
            ?
            <BorrandoRegistroSeguimientos vista="seguimientos" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas"
            ?
            <BorrandoRegistroPruebas vista="pruebas" config={props.config}/>
            :
            null
            }
            {props.vista === "valoraciones"
            ?
            <BorrandoRegistroValoraciones vista="valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_valoraciones"
            ?
            <BorrandoRegistroPruebasValoraciones vista="pruebas_valoraciones" config={props.config}/>
            :
            null
            }
            {props.vista === "pruebas_hechas"
            ?
            <BorrandoRegistroPruebasHechas vista="pruebas_hechas" config={props.config}/>
            :
            null
            }
        </div>
    )
}
export default BorrandoRegistrosAdmin;