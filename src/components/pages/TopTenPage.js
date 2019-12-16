import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import uuidv4 from "uuid";
import styled from "styled-components";

import Header from "../layout/Header";
import HeaderRow from "../layout/HeaderRow";
import Background from "../layout/Background";
import PageContainer from "../layout/PageContainer";
import { Button } from "../Button";
import { Input } from "../Input";
import { increment } from "../../actions/clickActions";
import { fetchData } from "../../actions/leadersActions";
import { appliftingBlue } from "../../constants";
import Content from "../layout/Content";
import LeaderBoard from "../LeaderBoard";

const TopTen = styled.div`
  font-size: 1.8rem;
  margin: 1rem;
  padding: 0.6rem 1.8rem;
  border-radius: 0.5rem;
  background-color: ${appliftingBlue};
  color: white;
`;

const TopTenPage = ({ leaders, fetchData, increment }) => {
  const [inputText, setInputText] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = e => {
    e.preventDefault();
    if (inputText.length < 1) {
      alert("Fill some team name!");
      return;
    }
    history.push(`/${inputText}`);
    increment(inputText, uuidv4());
  };

  const onChange = e => {
    setInputText(e.target.value);
  };

  return (
    <>
      <Background>
        <PageContainer>
          <Header>
            <HeaderRow>
              <Input value={inputText} onChange={e => onChange(e)} />
              <Button onClick={e => handleClick(e)} small />
            </HeaderRow>
            <HeaderRow>
              <TopTen>{"TOP 10 Clickers"}</TopTen>
            </HeaderRow>
          </Header>
          <Content>
            <LeaderBoard leaders={leaders} />
          </Content>
        </PageContainer>
      </Background>
    </>
  );
};

const mapStateToProps = ({ leaders, clicks, session }) => ({
  leaders,
  clicks,
  session
});

export default connect(mapStateToProps, { fetchData, increment })(TopTenPage);
