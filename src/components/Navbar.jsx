import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavbarContainer>
        <h2>
          Init <span>Solutions</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </div>
        <div className="burguer">
          <BurguerButton
            clicked={clicked}
            handleClick={handleClick}
          ></BurguerButton>
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavbarContainer>
    </>
  );
}

export default Navbar;

const NavbarContainer = styled.nav`
  h2 {
    font-weight: 300;
    color: #fff;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #0061da;
  display: flex;
  aling-items: center;
  justify-content: space-between;
  a {
    color: #fff;
    text-decoration: none;
    margin: 2rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a {
      color: #fff;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: #fff;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: #fff;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #0071ff;
  top: -700px;
  left: -1000px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .5s ease;
  &.active {
    border-radius: 0 0 50% 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
   
  }
`;
