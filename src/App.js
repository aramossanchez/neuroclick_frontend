import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/*IMPORTO CONTAINERS*/
import Login from './Containers/Login/Login';
import PantallaPrincipal from './Containers/PantallaPrincipal/PantallaPrincipal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/aplicacion" element={<PantallaPrincipal />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
