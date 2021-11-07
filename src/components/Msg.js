import React from 'react'
import styled from 'styled-components'
import nikukyu from "../images/nikukyu-orange.svg"
import { StaticImage } from 'gatsby-plugin-image'

const Msg = () => {
  return (
    <Wrapper className="partsGrid">
      <div className="grid12">
        <div className="section-title odd">
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
        <figure className="flame flame01">
          <StaticImage
            src="../images/cafe-interior.jpg"
            placeholder="tracedSVG"
            className="fig fig01"
            alt="cafe-interior"
          />
        </figure>
        <figure className="flame flame02">
          <StaticImage
            src="../images/cafeecup.jpg"
            imgStyle={{
              objectPosition: "100% 50%",
            }}
            placeholder="tracedSVG"
            className="fig fig02"
            alt="cafeecup"
          />
        </figure>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
overflow: hidden;
padding-top: 80px;
p{
  margin-bottom: 55px;
}
.fig{
    height: 30vh;
}
.flame{
      padding:7px;
      border:1px solid #ccc;
      background:#fff;
      box-shadow: 1px 1px 5px rgba(20,20,20,0.2);
      overflow: hidden;
      margin-bottom: 40px;
      max-width: 346px;
}
.flame01{
      grid-row: 4;
      z-index: 1;
      grid-column:  2 / 5;
      justify-self: center;
      transform: rotate(18deg);
}
.flame02{
      grid-row: 4;
      grid-column:  1/4;
      justify-self: center;
      transform: rotate(-25deg);
}
@media screen and (min-width: 768px) {
  .section-title.odd {
    grid-column: 1 / 6;
    grid-row: 1;
  }
  p{
    grid-row: 2;
    grid-column: 2/7;

  }
  .flame{
    margin-bottom: 0;
  }
  .flame01{
    grid-row: 1/3;
    align-self: center;
    grid-column: span 4 /-1;
    @media (min-width: 1024px){
      grid-column: span 3 /-1;
    }
  }
  .flame02{
    grid-row: 1/3;
    align-self: center;
    grid-column: span 4 /-3;
    @media (min-width: 1024px){
      grid-column: span 3 /-3;
    }
  }
}
`

export default Msg
