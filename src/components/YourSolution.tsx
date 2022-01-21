import React, { useState } from "react";
import styled from "styled-components";

const Container = styled("div")`
  border: 1px solid grey;
  padding: 15px;
`;

export const YourSolution: React.FC<any> = (props) => {
  return <Container>Your solution goes here</Container>;
};
