import React from 'react'
import styled from 'styled-components'

/*
=============== 
Adapting based on props
===============
*/

const Test = () => {

return(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);

}

const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${(props) => props.primary ? "palevioletred" : "white"};
color: ${(props) => props.primary ? "white" : "palevioletred"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;


export default Test


/*
=============== 
Extending Styles
===============
*/


import React from "react";
import styled from 'styled-components'

const Test = () => {
  return (
    <div>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </div>
  );
};
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export default Test;


/*
=============== 
 "as" polymorphic prop
===============
*/

import React from "react";
import styled from "styled-components";

const Test = () => {
  return (
    <div>
      <Button>Normal Button</Button>
      <Button as="color" href="green">
        Link with Button styles
      </Button>
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>
        <Button as={ReversedButton}>
          Custom Button with Normal Button styles
        </Button>
    </div>
  );
};

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export default Test;

import React from "react";
import styled from "styled-components";

/*
=============== 
Passed props
===============
*/

const Test = () => {
  // Render a styled text input with the standard input color, and one with a custom input color
  return (
    <div>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    </div>
  );
};
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;


export default Test;


/*
=============== 
&
===============
*/

import React from "react";
import { css } from "styled-components";
import styled from "styled-components";

const Test = () => {

  return (
    <React.Fragment>
      <Thing>blue</Thing>
      <Thing>lime</Thing>
      <Thing className="something">orange</Thing>
      <div>Pretty nice day today.</div>
      <Thing>tomato</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
    </React.Fragment>
  );
};

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; 
     // <Thing> as a sibling of <Thing>, but maybe not directly next to it
     /* 一つ飛びの<Thing> */
  }

  & + & {
    background: lime; 
    // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

export default Test;


/*
=============== 
&&
===============
*/

// && a double ampersand refers to an instance of the component; this is useful if you're doing conditional styling overrides and don't want a style to apply to all instances of a particular component:
import React from "react";
import { css } from "styled-components";
import styled from "styled-components";

const Test = () => {
  return (
    <React.Fragment>
      <Label>
        <Input defaultChecked />
        <LabelText>Foo</LabelText>
      </Label>
      <Label>
        <Input />
        <LabelText $mode="dark">Foo</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText>Foo</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText $mode="dark">Foo</LabelText>
      </Label>
    </React.Fragment>
  );
};

const Input = styled.input.attrs({ type: "checkbox" })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const LabelText = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case "dark":
        return css`
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: red;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;

// const LabelText = styled.span`
//   background-color: ${(props) => props.$mode || "red"};
// `;

export default Test;


/*
=============== 
Attaching additional props
===============
*/

import React from "react";
import { css } from "styled-components";
import styled from "styled-components";

const Test = () => {

  return (
    <div>
      <Input placeholder="A small text input" />
      <br />
      <Input placeholder="A bigger text input" size />
    </div>
  );
};

const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",
  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;


// const Input = styled.input.attrs((props) => ({
//   // we can define static props
//   type: "text",
// }))`
//   color: palevioletred;
//   font-size: 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;

//   /* here we use the dynamically computed prop */
//   margin: ${(props) => props.size ? "2em" :"1em"};
//   padding: ${(props) =>  props.size ? "2em" :"1em"};
// `;

export default Test;

/*
=============== 
Overriding .attrs
===============
*/

import React from "react";
import { css } from "styled-components";
import styled from "styled-components";

const Test = () => {
  return (
    <div>
      <Input placeholder="A bigger text input" size="2em" />
      <br />
      {/* Notice we can still use the size attr from Input */}
      <PasswordInput placeholder="A bigger password input" size="2em" />
    </div>
  );
};

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

export default Test;
