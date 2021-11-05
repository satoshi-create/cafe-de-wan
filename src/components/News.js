import React from 'react'
import styled from 'styled-components'

const News = () => {
  return (
    <Wrapper className="partsGrid">     
        <div className="section-title">
          <h2>NEWS</h2>
          <h3>店舗の最新情報です</h3>
        </div>
        <dl>
          <dt>2020年2月1日</dt>
          <dd>私たちのパートナーに、ミニチュアダックスフンドのワンが仲間いりしました</dd>
          <dt>2020年2月1日</dt>
          <dd>私たちのパートナーに、ミニチュアダックスフンドのワンが仲間いりしました</dd>
          <dt>2020年2月1日</dt>
          <dd>私たちのパートナーに、ミニチュアダックスフンドのワンが仲間いりしました</dd>
          <dt>2020年2月1日</dt>
          <dd>私たちのパートナーに、ミニチュアダックスフンドのワンが仲間いりしました</dd>
        </dl>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
`

export default News
