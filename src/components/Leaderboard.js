import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import LeaderboardRow from "./LeaderboardRow";
import { fetchData } from "../actions/leadersActions";

const Content = styled.div`
  left: 0;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const Leaderboard = ({ leaders, clicks, fetchData, team }) => {
  useEffect(() => {
    fetchData();
  }, [clicks, fetchData]);

  const getFirstTen = () => leaders.slice(0, 10);

  const getAroundMe = () => {
    const myClicks = leaders.find(l => l.team === team);
    const myOrder = myClicks && myClicks.order;
    if (myOrder < 4) {
      return leaders.slice(0, 7);
    } else if (myOrder > leaders.length) {
      return leaders.slice(leaders.length - 7, leaders.length);
    } else {
      return leaders.slice(myOrder - 4, myOrder + 3);
    }
  };

  const getLeaders = () => {
    return team ? getAroundMe() : getFirstTen();
  };

  return (
    <Content>
      {leaders &&
        getLeaders().map((leader, key) => (
          <LeaderboardRow
            key={key}
            {...leader}
            current={leader.team === team}
          />
        ))}
    </Content>
  );
};

const mapStateToProps = ({ leaders, clicks }) => ({
  leaders,
  clicks
});

export default connect(mapStateToProps, { fetchData })(Leaderboard);
