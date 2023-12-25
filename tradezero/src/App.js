import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Software from "./components/Software";
import Awards from "./components/Awards";
import Account from "./components/Account";

function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Software/>
    <Awards/>
    <Account/>
    </>
  )
}
export default App