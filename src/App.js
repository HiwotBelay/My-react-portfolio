import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
//import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'font-awesome/css/font-awesome.min.css';
import 'aos/dist/aos.css';



function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
