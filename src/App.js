import "./App.css";
import SPA from "./Components/SPA/SPA.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Components/Contacto/Contacto.jsx";
import Provider from "./Context/handleContext.jsx";
import Login from './Components/LogIn/Login.jsx'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SPA />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Login" element={<Login/>}> </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
