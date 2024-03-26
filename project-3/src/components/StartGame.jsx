import React from "react";

import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <div>
        {" "}
        <img src="/images/dices.png" />
      </div>

      <div className="content">
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  align-items: center;
  margin: 0 auto;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  font-size: 16px;

  padding: 10px 18px;

  color: white;

  min-width: 220px;
  border: none;
  background: #000000;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
