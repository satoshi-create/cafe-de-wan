import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Dogs = () => {
  return (
    <Wrapper className="partsGrid">
      <div className="grid12">
        <div className="section-title even">
          <h2>OUR FAMILY</h2>
          <div className="underline"></div>
          <h3>私たちの大切な<br/>パートナーです</h3>
        </div>
        <div className="dog-photo">
          <img alt="dog" />
          <img alt="dog" />
          <img alt="dog" />
          <img alt="dog" />
          <img alt="dog" />
          <img alt="dog" />
        </div>
      </div>
    </Wrapper>

  )
}

const Wrapper = styled.section`
background-color: var(--clr-light-orange);
padding-top:70px;
`

export default Dogs
