import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/*IMPORTO CONTAINERS*/
import Login from './Containers/Login/Login';
import PantallaPrincipal from './Containers/PantallaPrincipal/PantallaPrincipal';
import NuevoUsuario from './Containers/NuevoUsuario/NuevoUsuario';
import NuevoProfesional from './Containers/NuevoProfesional/NuevoProfesional';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/aplicacion" element={<PantallaPrincipal />} />
          <Route path="/nuevousuario" element={<NuevoUsuario />} />
          <Route path="/nuevoprofesional" element={<NuevoProfesional />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
