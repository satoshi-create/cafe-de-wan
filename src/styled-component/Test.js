import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";
import nikukyuOg from "../images/nikukyu-orange.svg";
import nikukyuBl from "../images/nikukyu-blue.svg";

const theme = {
  fg: nikukyuOg,
  bg: nikukyuBl,
};

const Test = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <ButtonStyledFirst
          clicked={clicked}
          onClick={() => setClicked(clicked + 1)}
        >
          {/* <img
          src = {clicked % 2 == 0 ? nikukyuOg : nikukyuBl}
          /> */}
        </ButtonStyledFirst>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px 40px;
  font-size: 20px;
  border-radius: 25px;
  margin-bottom: 20px;
  transition: all 0.3s linear;
  border: 1px solid;
  cursor: pointer;
  display: inline-block;
`;
const ButtonStyledFirst = styled(Button)`
  background-repeat: no-repeat;
  padding: 40px;
  background-size: auto;
  background-position: center;
  font-size: 20px;
  border: 1px solid;
  /* font-size: ${({ clicked }) => `${clicked}px`}; */
  color: ${({ clicked }) => (clicked % 2 == 0 ? "blue" : "white")};
  /* background-color: ${({ clicked }) =>
    clicked % 2 == 0 ? "red" : "black"}; */
  background-image: url(${theme.fg});
  background-image: url(${({ clicked }) =>
    clicked % 2 == 0 ? theme.fg : theme.bg});
  border: ${({ clicked }) => (clicked % 2 == 0 ? "red" : "black")};
`;

export default Test;
