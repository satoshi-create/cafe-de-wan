import React from 'react'
import styled from 'styled-components'
import nikukyuWhite from "../images/nikukyu-white.svg";

const Footer = () => {
  return (
    <Wrapper className="partsGrid">
      <div className="grid12">
        <p>©2021 cafe de WON all right reserved</p>
        <img src={nikukyuWhite} alt="nikukyu-white" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
background-color: var(--clr-black);
height: 224px;
  p{
    color:var(--clr-white);
    font-size: 13px;
    align-self: end;
    justify-self: center;
  }
  img{
    justify-self: right;
    align-self: flex-start;
    @media (min-width: 768px) {
      grid-column: 9/10;
  }
}
`



export default Footer
