import Home from './Pages/Home';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import SobreMi from './Pages/SobreMi';
import RedesSociales from './Pages/RedesSociales';
import Proyectos from './Pages/Proyectos';
import Contacto from './Pages/Contacto';
function App() {
  return (
    <div className="App">
      <Router >
        <Routes >
          <Route path="/" element={<Home></Home>}/>
          <Route path="/sobre-mi" element={<SobreMi></SobreMi>}/>
          <Route path="/redes-sociales" element={<RedesSociales></RedesSociales>}/>
          <Route path="/proyectos" element={<Proyectos></Proyectos>}/>
          <Route path="/contacto" element={<Contacto></Contacto>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
