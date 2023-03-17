import { Link, NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Icons from "./component/Icons";
import { Reset } from "styled-reset";
import Footer from "./component/Footer";
import About from "./component/About";
import PortFolio from "./component/Portfolio";
import Skill from "./component/Skill";

function App() {
  return (
    //Routes를 쓸때 중요한점 = path and element 그리고 Route를 쓸때는 Routes안에 모두 있어야 한다
    <>
      <Reset />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
      <Icons />
      <Footer />
    </>
  );
}

export default App;
