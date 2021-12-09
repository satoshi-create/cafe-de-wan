import React, { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import nikukyuOg from "../images/nikukyu-orange.svg";
import nikukyuBl from "../images/nikukyu-blue.svg";

const theme = {
  fg: nikukyuOg,
  bg: nikukyuBl,
};

const ButtonNikukyu = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <ButtonStyledFirst
        clicked={clicked}
        onClick={() => setClicked(clicked + 1)}
      >
        {/* <img src={clicked % 2 == 0 ? nikukyuOg : nikukyuBl} /> */}
      </ButtonStyledFirst>
    </ThemeProvider>
  );
};

const ButtonStyledFirst = styled("button")`
  position: absolute;
  bottom: -90px;
  left: 160px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s linear;
  background-color: transparent;
  background-repeat: no-repeat;
  padding: 40px;
  /* background-size: auto; */
  background-position: center;
  border: none;
  background-image: url(${({ clicked }) =>
    clicked % 2 == 0 ? theme.bg : theme.fg});
`;

export default ButtonNikukyu;
