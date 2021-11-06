import React,{useContext} from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import fukidashiSp from '../images/fukidashi-sp.svg'
import fukidashiPc from '../images/fukidashi-pc.svg'
import { GatsbyContext } from '../context/context'

const Dogs = () => {
  const { openModal } = useContext(GatsbyContext)
  return (
    <Wrapper className="partsGrid">
      <div className="grid12">
        <div className="section-title even">
          <h2>OUR FAMILY</h2>
          <div className="underline"></div>
          <h3>私たちの大切な<br />パートナーです</h3>
        </div>
        <button className="btn" onClick={openModal}>
          <StaticImage
            src="../images/moal.jpg"
            placeholder="tracedSVG"
            className="dogs-img"
            alt="moal"
          />
        </button>
      </div>
      <div class="custom-shape-divider-top-1636126753">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="custom-shape-divider-bottom-1636127149">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>

    </Wrapper >

  )
}

const Wrapper = styled.section`
background-color: var(--clr-light-orange);
padding:125px 0 454px 0;
position: relative;
.grid12{
  row-gap: 22px;
  position: relative;
  .dogs-img:nth-child(odd){
    justify-self: flex-end;
  }
  @media (min-width: 768px) {
    .section-title.even{
      margin-bottom: 0px;
    }
    .dogs-img:not(:first-child){
      margin-top:-80px;
    }
    .dogs-img:nth-child(2){
      grid-row: 3/4;
      justify-self: flex-start;
    }
    .dogs-img:nth-child(3){
      justify-self: center;
    }
    .dogs-img:nth-child(4){
      justify-self:flex-end;
    }
    .dogs-img:nth-child(5){
      grid-row: 6/7;
      justify-self: flex-start;
    }
    .dogs-img:nth-child(6){
      justify-self: center;
    }
    .dogs-img:nth-child(7){
      margin-right: 70px;
      justify-self: flex-end;
    }
  }&::before{
  content: url(${fukidashiSp});
  display: block;
  position: absolute;
  top: -100px;
  right: -60px;
  z-index:1;
  @media (min-width: 768px){
    content: url(${fukidashiPc});
    top: -140px;
    right: -110px;
  }
}
}
.fukidashi{
  position:absolute;
  position: absolute;
  top: 70px;
  right: 0;
  width: 327px;
  height: 250px;
  z-index: 1;
  @media (min-width: 768px){
    width: 438px;
    height:333px;
    top: 30px;
  }
}
.dogs-img{
  width: 190px;
  height: 190px;
  border-radius: 50%;
  border: 8px solid white;
  box-shadow: 1px 1px 5px rgba(20,20,20,0.2);
}
.wave-top{
  grid-column: 1/-1;
  position: absolute;
  top: -120px;
  left: 0;
}
.custom-shape-divider-top-1636126753 {
    grid-column: 1/-1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1636126753 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
}

.custom-shape-divider-top-1636126753 .shape-fill {
    fill: #FFFFFF;
}
.custom-shape-divider-bottom-1636127149 {
    grid-column: 1/-1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1636127149 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
}

.custom-shape-divider-bottom-1636127149 .shape-fill {
    fill: #FFFFFF;
}

`

export default Dogs
