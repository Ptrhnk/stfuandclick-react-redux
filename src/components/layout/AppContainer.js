import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { appliftingBlue } from "../../constants";
import Background from "./Background";
import ClickContainer from "../ClickContainer";
import Leaderboard from "../Leaderboard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  height: 80%;
  border-radius: 0.8rem;
  max-width: 42%;
  border: 3px solid ${appliftingBlue};
  background-color: white;
  overflow: hidden;

  @media (max-width: 1200px) {
    min-width: 60%;
  }
  @media (max-width: 900px) {
    min-width: 90%;
  }
`;

const AppContainer = () => {
  const { team } = useParams();

  return (
    <Background>
      <Container>
        <ClickContainer team={team} />
        <Leaderboard team={team} />
      </Container>
    </Background>
  );
};

export default AppContainer;
