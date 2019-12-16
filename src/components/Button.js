import React from "react";
import styled from "styled-components";

import { appliftingBlue } from "../constants";

const ClickBtn = styled.button`
  width: ${({ small }) => (small ? "50%" : "100%")};
  background-color: ${appliftingBlue};
  color: white;
  border-radius: 0.5rem;
  padding: 3.4rem 0;
  font-size: 3.6rem;
  letter-spacing: 0.4rem;
  border: none;
  outline: none;
`;

export const Button = ({ onClick, small }) => {
  return (
    <ClickBtn onClick={onClick} small={small}>
      {" "}
      CLICK!{" "}
    </ClickBtn>
  );
};
