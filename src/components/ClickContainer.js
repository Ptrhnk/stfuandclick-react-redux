import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import uuidv4 from "uuid";
import _ from "lodash";

import { increment } from "../actions/clickActions";
import { Button } from "./Button";
import { Input } from "./Input";
import { appliftingBlue } from "../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Clicks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: space-between;
  flex-direction: row;
  font-size: 1.6rem;
  margin: 1rem 0;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Counter = styled.div`
  font-size: 3.8rem;
  color: ${appliftingBlue};
`;

const TopTen = styled.div`
  font-size: 1.8rem;
  margin: 1rem;
  padding: 0.6rem 1.8rem;
  border-radius: 0.5rem;
  background-color: ${appliftingBlue};
  color: white;
`;

const session = uuidv4();
const ClickContainer = ({ leaders, clicks, increment, team }) => {
  const [inputText, setInputText] = useState("");
  const history = useHistory();

  const handleClick = e => {
    e.preventDefault();
    if (!team) {
      if (inputText.length < 1) {
        alert("Fill some team name!");
        return;
      }
      history.push(`/${inputText}`);
      increment(inputText, session);
    } else {
      increment(team, session);
    }
  };

  const onChange = e => {
    setInputText(e.target.value);
  };

  const getClicks = () => {
    const myTeam = leaders && leaders.find(l => l.team === team);
    return myTeam && myTeam.clicks;
  };

  return (
    <Container>
      <Row>
        {!team && <Input value={inputText} onChange={e => onChange(e)} />}
        <Button onClick={e => handleClick(e)} hasTeam={team && true} />
      </Row>
      {team ? (
        <Clicks>
          <Box>
            <div>Your clicks:</div>
            <Counter>{!_.isEmpty(clicks) ? clicks.your_clicks : 0}</Counter>
          </Box>
          <Box>
            <div>Team clicks:</div>{" "}
            <Counter>
              {!_.isEmpty(clicks) ? clicks.team_clicks : getClicks()}
            </Counter>
          </Box>
        </Clicks>
      ) : (
        <TopTen>{"TOP 10 Clickers"}</TopTen>
      )}
    </Container>
  );
};

const mapStateToProps = ({ leaders, clicks }) => ({
  leaders,
  clicks
});

export default connect(mapStateToProps, { increment })(ClickContainer);
