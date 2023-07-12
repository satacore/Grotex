import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import SPA from "./Components/SPA/SPA.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import Contacto from "./Components/Contacto/Contacto.jsx";
import Provider from "./Context/handleContext.jsx";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SPA />} />
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
