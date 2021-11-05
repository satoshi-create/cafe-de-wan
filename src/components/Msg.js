import React from 'react'
import styled from 'styled-components'
import nikukyu from "../images/nikukyu-orange.svg"
import { StaticImage } from 'gatsby-plugin-image'

const Msg = () => {
  return (
    <Wrapper className="partsGrid">
      <div className="grid12">
        <div className="section-title">
          <h2>OUR CAFE</h2>
          <div className="underline"></div>
          <h3>駅から徒歩2分、<br />
            お洒落で清潔なカフェです</h3>
        </div>
        <p>パートナーの犬6匹とともに
          皆様の憩いの場となれるカフェを運営しています。
          <br />
          <br />
          店内には、犬と触れ合えるスペースを
          広く設けております。お一人で、家族で
          ごゆっくりおくつろぎください。
        </p>
          <StaticImage
            src="../images/cafe-interior.jpg"
            layout="fullWidth"
            placeholder="tracedSVG"
            className="fig fig01"
            alt="cafe-interior"
          />
          <StaticImage
            src="../images/cafeecup.jpg"
            layout="fullWidth"
            placeholder="tracedSVG"
            className="fig fig02"
            alt="cafeecup"
          />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-top: 80px;
.section-title{
  margin-bottom: 50px;
  h2{
    display: grid;
    grid-template-columns: 48px auto;
    align-items: center;
    grid-column-gap: 15px;
    &::before{
      content: url(${nikukyu});
      display: block;
  }
}
.underline{
  border-top: 5px dotted var(--clr-orange);
  width: 120px;
  padding-top: 5px;
  margin-left: 70px;
}
h3{
  margin-left: 70px;
}
}
p{
  margin-bottom: 55px;
}
.fig{
    padding: 10px;
    background: var(--clr-white);
    box-shadow: 11px 15px 13px #22222230;
    height: 221px;
    grid-row: 3;
}
.fig01{
  grid-column: span 2 / -1;

}
.fig02{
  grid-column: span 2;

}


`

export default Msg
