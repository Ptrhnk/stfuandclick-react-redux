import styled from "styled-components";
import { appliftingBlue } from "../../constants";

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

export default Row;
