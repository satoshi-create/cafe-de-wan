import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/logo.svg";
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper className="partsGrid">
      <nav className="nav grid12">
        <img src={logo} alt="logo" className="nav-logo" />
        <Link to="/" className="btn nav-icon">
          <button>nav</button>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/">ブログ</Link>
          </li>
          <li>
            <Link to="/">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
.nav{
  place-items: center;
  padding: 30px 0;
  .nav-logo{
    grid-column: span 1;
  }
  .nav-icon{
    grid-column: 4/-1;
    @media (min-width: 768px) {
      display: none;
  }
  }
  .nav-menu{
    display: none;
    @media (min-width: 768px) {
      display: block;
      display: grid;
      grid-template-columns: repeat(3,auto);
      grid-column-gap: 20px;
      grid-column: spna 4 /-1;
      a{
        font-family: var(--subtitle-font);
        font-size: 14px;
      }
  }
  }
}
`


export default Navbar
