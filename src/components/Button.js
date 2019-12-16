import React from "react";
import styled from "styled-components";

import { appliftingBlue } from "../constants";

const ClickBtn = styled.button`
  width: ${({ hasTeam }) => (hasTeam ? "100%" : "50%")};
  background-color: ${appliftingBlue};
  color: white;
  border-radius: 0.5rem;
  padding: 2rem 0;
  font-size: 1.8rem;
  border: none;
  outline: none;
`;

export const Button = ({ onClick, hasTeam }) => {
  return (
    <ClickBtn onClick={onClick} hasTeam={hasTeam}>
      {" "}
      CLICK!{" "}
    </ClickBtn>
  );
};
