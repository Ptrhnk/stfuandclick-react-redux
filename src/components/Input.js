import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 0.5rem;
  height: 3rem;
  outline: none;
  font-size: 1.4rem;
  width: 45%;
  border: 1px solid grey;
  padding: 1rem;
`;

export const Input = ({ value, onChange }) => {
  return <StyledInput type="text" value={value} onChange={onChange} />;
};
