import React from "react";
import Header from "./components/Header";
import Home from "./components/Home"; //importing Home
import About from "./components/About"; //importing about
import Portfolio from "./components/Portfolio";
//import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'font-awesome/css/font-awesome.min.css';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";



function App() {
  return (
    <div>
       <Helmet>
        <title>Hiwot's | Portfolio</title>
      </Helmet>
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
