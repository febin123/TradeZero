import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Software from "./components/Software";
import Awards from "./components/Awards";
import Account from "./components/Account";
import Choose from "./components/Choose";
import Footer from "./components/Footer";

function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Software/>
    <Awards/>
    <Account/>
    <Choose/>
    <Footer/>
    </>
  )
}
export default App