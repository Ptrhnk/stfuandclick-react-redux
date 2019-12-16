import React from "react";
import styled from "styled-components";

import ContentRow from "./layout/ContentRow";

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
    <ContentRow current={current} order={order}>
      <Order>{order}</Order>
      <TeamInfo>
        <Team>{team}</Team>
        <Clicks>{clicks}</Clicks>
      </TeamInfo>
    </ContentRow>
  );
};

export default LeaderboardRow;
