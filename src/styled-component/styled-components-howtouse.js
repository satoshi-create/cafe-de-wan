import React from 'react'
import styled from 'styled-components'


const Padding = styled.div`
  padding-top: ${props => props.top}px;
  padding-left: ${props => props.top}px;
  padding-right: ${props => props.top}px;
  padding-bottom: ${props => props.top}px;
`
Padding.defaultProps = {
  top:0,
  left:0,
  right:0,
  bottom:0
}

const Test = () => {
  return (
    <div>
      <Padding top={30} right={30} left={30} bottom={30}>
        padding
      </Padding>
    </div>
  )
}

export default Test



import React from "react";
import styled,{css} from "styled-components";

const colors = {
  secondary: {
    borderColor: "red",
    bg: "blue",
  },
};
const ButtonStyle = css`
  display: inline-block;
  width: 100%;
  padding: 0;
`;
const ButtonLink = styled.a.attrs({
  href: (props) => props.href,
  target: (props) => (props.target === "_new" ? props.target : "_self"),
})`
  ${ButtonStyle}
  background: ${(props) => colors[props.type]["borderColor"]};
  color: ${(props) => colors[props.type]["bg"]};;
`;

const Test = () => {
  return (
    <div>
      <ButtonLink href={`https://some.jp`} target={"_new"} type={"secondary"}>
        ボタン
      </ButtonLink>
    </div>
  );
};

export default Test;
