import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import SPA from "./Components/SPA/SPA.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SPA />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
