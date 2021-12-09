/*
=============== 
toggle button - change color
===============
*/

import React, { useState } from "react";
import styled, { css } from "styled-components";

const Test = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Wrapper>
      <ButtonStyled clicked={clicked} onClick={() => setClicked(!clicked)}>
        test
      </ButtonStyled>
    </Wrapper>
  );
};
const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
`;
const ButtonStyled = styled("button")`
  padding: 10px 40px;
  font-size: 20px;
  border-radius: 25px;
  margin-bottom: 20px;
  transition: all .3s linear;
  /* ${({ clicked }) =>
  clicked
  ? css`
  color: blue;
  `
  : css`
  color: white;
  `}; */
  /* background-color: ${({ clicked }) => (clicked ? "red" : "black")}; */
  border: 1px solid;
  ${({ clicked }) =>
    clicked
      ? css`
          color: blue;
          background-color: red;
          border:red;
        `
      : css`
          color: white;
          background-color: black;
          border:black;
        `
      };
  cursor: pointer;
  display: inline-block;
`;

export default Test;


/*
=============== 
toggle two button - change color
===============
*/

import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";

const theme = {
  fg: "blue",
  bg: "red",
};
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

const Test = () => {
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);
  console.log(clicked);
  // console.log(checked);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <ButtonStyledFirst clicked={clicked} onClick={() => setClicked(!clicked)}>
          test
        </ButtonStyledFirst>
      </Wrapper>
      <Wrapper>
        <ThemeProvider theme={invertTheme}>
          <ButtonStyledSecond checked={checked} onClick={() => setChecked(!checked)}>
            test
          </ButtonStyledSecond>
        </ThemeProvider>
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
`
const ButtonStyledFirst = styled(Button)`
  ${({ clicked }) =>
    clicked
      ? css`
          color: ${(props) => props.theme.fg};
          background-color: ${(props) => props.theme.bg};
          border: red;
        `
      : css`
          color: ${(props) => props.theme.bg};
          background-color: ${(props) => props.theme.fg};
          border: black;
        `};
`;

const ButtonStyledSecond = styled(Button)`
  ${({ checked }) =>
    checked
      ? css`
          color: ${(props) => props.theme.fg};
          background-color: ${(props) => props.theme.bg};
          border: red;
        `
      : css`
          color: ${(props) => props.theme.bg};
          background-color: ${(props) => props.theme.fg};
          border: black;
        `};
`;

export default Test;


/*
=============== 
toggle button - counter - change color
===============
*/
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";

const theme = {
  fg: "blue",
  bg: "red",
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
          {clicked}
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
  font-size: 20px;
  border:1px solid;
  /* font-size: ${({ clicked }) => `${clicked}px`}; */
  color: ${({ clicked }) => (clicked % 2 == 0 ? "blue" : "white")};
  background-color: ${({ clicked }) => (clicked % 2 == 0 ? "red" : "black")};
  border: ${({ clicked }) => (clicked % 2 == 0 ? "red" : "black")};
`

export default Test;



/*
=============== 
toggle button - change img or background-image
===============
*/
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
          <img
          src = {clicked % 2 == 0 ? nikukyuOg : nikukyuBl}
          />
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
