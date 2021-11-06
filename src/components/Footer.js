import React from 'react'
import styled from 'styled-components'
import nikukyuWhite from "../images/nikukyu-white.svg";

const Footer = () => {
  return (
    <Wrapper className="partsGrid">
      <div className="grid12">
        <p>©2021 cafe de WON all right reserved</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
background-color: var(--clr-black);
height: 224px;
display: grid;
place-content: center;
  p{
    color:var(--clr-white);
    font-size: 13px;
    align-self: end;
    justify-self: center;
    position: relative;
      &::after{
      content: url(${nikukyuWhite});
      position: absolute;
      bottom: -70px;
      right: -30px;
  }
  }
`



export default Footer
