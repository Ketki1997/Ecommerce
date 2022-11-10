import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext, useProductContext } from "./context/ProductContext";

const About = () => {

  const {myName}=useProductContext();
  const data = {
    name:"About Aksesso"
}
  return (
  
  <div>
    
  <HeroSection  myData={data}/>
  </div>
  );
};

export default About;
