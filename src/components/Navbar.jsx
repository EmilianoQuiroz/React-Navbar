import React from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <h2>
          Init <span>Solutions</span>
        </h2>
        <div>
          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </div>
        <BurguerButton></BurguerButton>
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
  padding: .4rem;
  background-color: #0061da;
  display: flex;
  aling-items: center;
  justify-content: space-between;
  a {
    color: #fff;
    text-decoration: none;
    margin: 1rem;


  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
