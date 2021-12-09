/*
=============== 
Theming - ThemeProvider
===============
*/

import React from "react";
import { ThemeProvider,css } from "styled-components";
import styled from "styled-components";

const Test = () => {
  return(
    <div>
    <Button>Normal</Button>

    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>
  )
}

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;


export default Test;

/*
=============== 
function themes
===============
*/
import React from "react";
import { ThemeProvider, css } from "styled-components";
import styled from "styled-components";

const Test = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button>Default Theme</Button>

        <ThemeProvider theme={invertTheme}>
          <Button>Inverted Theme</Button>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
};

// Define our `fg` and `bg` on the theme
const theme = {
  fg: "palevioletred",
  bg: "white",
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  transition: all 0.3s linear;
  &:hover{
    color: ${(props) => props.theme.bg};
    border: 2px solid ${(props) => props.theme.bg};
    background: ${(props) => props.theme.fg};
  }

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;


export default Test;


/*
=============== 
themes props
===============
*/

import React from "react";
import styled from "styled-components";
import { ThemeProvider, useTheme } from "styled-components";

const theme = {
  button: {
    backgroundColor: {
      default: "gray",
      primary: "blue",
      warning: "orange",
    },
  },
};

const cusomTheme = {
  button: {
    backgroundColor: {
      default: "green",
      primary: "tomato",
    },
  },
};

const ButtonGroup = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="warning">Warning</Button>
      </ThemeProvider>
      <ThemeProvider theme={cusomTheme}>
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="warning">Warning</Button>
      </ThemeProvider>
    </>
  );
};

const Button = (props) => {
  console.log(props.theme);
  return <StyledButton {...props} />;
};
const StyledButton = styled.button`
  font-size: 12px;
  background-color: ${(props) =>
    props.theme.button.backgroundColor[props.color]};
`;

export default ButtonGroup;


