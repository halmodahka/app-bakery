import logo from "./cakelogo.png";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #df5286;
  font-family: monospace;
  font-size: 50px;
`;
const Description = styled.h2`
  text-align: center;
  color: #89cff0;
  font-family: monospace;
  font-size: 15px;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

function ShopComponents() {
  return (
    <div className="App">
      <Title>Sweet Cake</Title>
      <div className="subtitle">
        <Description>Happiness is a Piece of Cake</Description>
        <ShopImage alt="cake" src={logo} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default ShopComponents;
