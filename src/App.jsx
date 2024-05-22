import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Header";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Projects from "./assets/Projects";
import Footer from "./assets/Footer";
import Resume from "./assets/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarm from "./assets/Navbarm";
import styled from "styled-components";
// import Home from "./assets/Home";
// import Test from "./assets/img/Test";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Wrapper>
          <div className="hero-section">
            <Navbarm />
            <Routes>
              {/* <Route path="./assets/body" element={<Body />}></Route> */}
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/navbar" element={<Navbarm />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/resume" element={<Resume />}></Route>
              {/* <Route path="/" element={<Test />}></Route> */}

              {/* <Contact /> */}
            </Routes>
            <Footer />
          </div>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
const Wrapper = styled.section`
  .hero-section {
    display: flex;
    flex-direction: row;
  }
`;
