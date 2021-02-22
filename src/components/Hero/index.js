import React, { useState } from "react";
import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./HeroElements";
import NavBar from "../Navbar/index";
import Sidebar from "../Sidebar";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
