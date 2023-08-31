import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Navtabs } from "./components/Navtabs";
import "./App.css";
import { AIhistory } from "./pages/AIhistory";
import { Aican } from "./pages/Aican";
import { Aihelps } from "./pages/Aihelps";
import { Aiexample } from "./pages/Aiexample";
import Ainews from "./components/Ainews";
import { Imageset } from "./components/Imageset";
import { Navbarsecond } from "./components/Navbarsecond";
import { Footer } from "./components/Footer";
import { Aiupdates } from "./components/Aiupdates";
import { Growknowledge } from "./pages/Articles/Growknowledge";
import { Aitools } from "./pages/Articles/Aitools";
import { Aieffects } from "./pages/Articles/Aieffects";
import { Aifor_people } from "./components/Aifor_people";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Navbarsecond />
        <Routes>
          <Route path="/" element={<Growknowledge />} />
          <Route path="/Aitools" element={<Aitools/>} />
          <Route path="/Aieffects" element={<Aieffects />} />
        </Routes>
        <Ainews />
        <Navtabs />
        <Imageset />
        <Routes>
          <Route path="/" element={<AIhistory />} />
          <Route path="/Aican" element={<Aican/>} />
          <Route path="/Aihelps" element={<Aihelps />} />
          <Route path="/Aiexample" element={<Aiexample />} />
        </Routes>
        <Aifor_people />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
