import "./App.css";
import SPA from "./Components/SPA/SPA.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Components/Contacto/Contacto.jsx";
import Provider from "./Context/handleContext.jsx";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SPA />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
