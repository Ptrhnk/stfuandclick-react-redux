import React from "react";
import styled from "styled-components";
import { appliftingBlue } from "../constants";

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;

  background-color: ${({ current, order }) =>
    current ? `${appliftingBlue}` : order % 2 ? "#a4d4fc" : "#a4c5fc"};
  font-size: ${({ current }) => (current ? "2.6rem" : "1.5rem")};
  font-weight: ${({ current }) => (current ? "600" : "400")};
  color: ${({ current }) => (current ? "white" : " black")};
  overflow: hidden;
`;

const Order = styled.div`
  display: flex;
  justify-content: center;
  min-width: 14%;
`;

const Team = styled.div`
  word-break: break-all;
  padding: 1rem 0;
`;

const Clicks = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
`;

const TeamInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const LeaderboardRow = ({ order, team, clicks, current }) => {
  return (
    <Row current={current} order={order}>
      <Order>{order}</Order>
      <TeamInfo>
        <Team>{team}</Team>
        <Clicks>{clicks}</Clicks>
      </TeamInfo>
    </Row>
  );
};

export default LeaderboardRow;
