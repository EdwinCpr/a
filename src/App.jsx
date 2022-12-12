import { HashRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

const App = () => {
  return (
    <div>
      <HashRouter>
        <NavBar/>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
};

export default App;