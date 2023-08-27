import React from "react";
import styled from "styled-components";

export const HorizontalLine = styled.div`
  
`;

export const NoTextLine = ({ text }) => {
  return (
    <div style={{
      width: "100%",
      height: "1px",
    }}></div>
  );
};

export default NoTextLine;