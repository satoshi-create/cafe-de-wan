import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import scrollIcon from "../images/scroll_icon.svg";


const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../images/moal.jpg"
        layout="fullWidth"
        placeholder="tracedSVG"
        imgStyle={{
          objectPosition: "80% 50%",
        }}
        className="hero-img"
        alt="dog-moal"
      />
      <div className="site-title partsGrid">
        <div className="grid12">
          <h1 className="A">CAFE DE</h1>
          <h1 className="B">WAN</h1>
        </div>
      </div>
      <img src={scrollIcon} alt="scroll-icon" className="scroll-icon" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
position: relative;
height: 100vh;
margin-top: -120px;
  .hero-img{
    height: 100%;
  }
  .site-title{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    place-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    @media (min-width: 768px){
      place-content: start;
      place-items: start;
    }.grid12{
      padding-top: 300px;
      @media (min-width: 768px){
        padding-top: 150px;
    }
    .A{
      color: var(--clr-white);
      grid-row: 1;
      transform: rotate(-22deg);
      padding-right: 140px;
    }
    .B{
      color: var(--clr-orange);
      grid-row: 2;
      font-size: 61px;
      transform: rotate(-36deg);
      padding-left:60px;
      padding-top: 20px;
    }
    }

  }
  .scroll-icon{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #ffffff42;
      padding: 10px;
      margin:auto;
    }
`


export default Hero
