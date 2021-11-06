import React from 'react'
import styled from 'styled-components'
import textureImg from "../images/texture.jpg";

const News = () => {
  return (
    <Wrapper className="partsGrid">
      <div className="texture">
        <div className="section-title odd">
          <h2>NEWS</h2>
          <div className="underline"></div>
          <h3>店舗の最新情報です</h3>
        </div>
        <dl className="grid12">
          <dt>2020年2月1日</dt>
          <dd>私たちのパートナーに、ミニチュアダックスフンドのワンが仲間いりしました</dd>
          <dt>2020年2月1日</dt>
          <dd>私たちのパートナーに、ミニチュアダックスフンドのワンが仲間いりしました</dd>
          <dt>2020年2月1日</dt>
          <dd>私たちのパートナーに、ミニチュアダックスフンドのワンが仲間いりしました</dd>
          <dt>2020年2月1日</dt>
          <dd>私たちのパートナーに、ミニチュアダックスフンドのワンが仲間いりしました</dd>
        </dl>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
position: relative;
margin-top: -340px;
.texture{
  background-image: url(${textureImg});
  padding: 30px 20px;
  margin: 0 -20px;
  @media (min-width: 768px) {
    padding: 30px 30px 70px;
    }
}
dl{
  row-gap: 10px;
}
dt{
  font-weight: bold;
  @media (min-width: 768px) {
      grid-column: span 3;
      @media (min-width: 1024px) {
        grid-column: span 2;
    }
    }
}
dd{
  margin-bottom: 10px;
  @media (min-width: 768px) {
      margin-bottom: 0;
      grid-column: 4 / -1;
      @media (min-width: 1024px) {
        grid-column: 3 / -1;
    }
    }
}
`

export default News
