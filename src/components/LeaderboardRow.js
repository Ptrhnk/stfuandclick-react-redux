import React from "react";
import styled from "styled-components";
import { appliftingBlue } from "../constants";

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;
  background-color: ${({ current, order }) =>
    current ? `${appliftingBlue}` : order % 2 ? "#a4d4fc" : "#a4c5fc"};
  height: ${({ current }) => (current ? "40px" : "30px")};
  font-size: 0.9rem;
  overflow: hidden;
`;

const Order = styled.div`
  margin: 0 30px;
  min-width: 20px;
`;

const Team = styled.div`
  margin-right: 20px;
  word-break: break-all;
`;

const Clicks = styled.div`
  margin-right: 10px;
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
