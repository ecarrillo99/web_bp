import Home from './Pages/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SobreMi from './Pages/SobreMi';
import RedesSociales from './Pages/RedesSociales';
import Proyectos from './Pages/Proyectos';
import Contacto from './Pages/Contacto';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/sobre-mi" element={<SobreMi></SobreMi>}/>
          <Route path="/redes-sociales" element={<RedesSociales></RedesSociales>}/>
          <Route path="/proyectos" element={<Proyectos></Proyectos>}/>
          <Route path="/contacto" element={<Contacto></Contacto>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
