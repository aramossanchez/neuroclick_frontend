import React from 'react';

//IMPORTAMOS COMPONENTES PARA LISTADO DE REGISTROS
import ListadoProfesionales from './ListadoProfesionales';
import ListadoUsuarios from './ListadoUsuarios';
import ListadoAntecendetesFamiliares from './ListadoAntecendetesFamiliares';
import ListadoEnfermedades from './ListadoEnfermedades';
import ListadoEnfermedadesUsuarios from './ListadoEnfermedadesUsuarios';
import ListadoMedicaciones from './ListadoMedicaciones';
import ListadoMedicacionesUsuarios from './ListadoMedicacionesUsuarios';
import ListadoPruebas from './ListadoPruebas';
import ListadoValoraciones from './ListadoValoraciones';
import ListadoPruebasValoraciones from './ListadoPruebasValoraciones';
import ListadoPruebasHechas from './ListadoPruebasHechas';

const ListadosAdmin = (props) =>{
    
    return(
        <div>
            {props.vista === "profesionales"
            ?
            <ListadoProfesionales/>
            :
            null
            }
            {props.vista === "usuarios"
            ?
            <ListadoUsuarios/>
            :
            null
            }
            {props.vista === "antecedentes_familiares"
            ?
            <ListadoAntecendetesFamiliares/>
            :
            null
            }
            {props.vista === "enfermedades"
            ?
            <ListadoEnfermedades/>
            :
            null
            }
            {props.vista === "enfermedades_usuarios"
            ?
            <ListadoEnfermedadesUsuarios/>
            :
            null
            }
            {props.vista === "medicaciones"
            ?
            <ListadoMedicaciones/>
            :
            null
            }
            {props.vista === "medicaciones_usuarios"
            ?
            <ListadoMedicacionesUsuarios/>
            :
            null
            }
            {props.vista === "pruebas"
            ?
            <ListadoPruebas/>
            :
            null
            }
            {props.vista === "valoraciones"
            ?
            <ListadoValoraciones/>
            :
            null
            }
            {props.vista === "pruebas_valoraciones"
            ?
            <ListadoPruebasValoraciones/>
            :
            null
            }
            {props.vista === "pruebas_hechas"
            ?
            <ListadoPruebasHechas/>
            :
            null
            }
        </div>
    )
}
export default ListadosAdmin;