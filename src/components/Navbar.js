import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import styled from "styled-components";
import links from "../constants/links";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="headerGrid">
        <nav className="nav grid12">
          <img src={logo} alt="logo" className="nav-logo" />
          <Link to="/" className="btn nav-icon">
            <button>nav</button>
          </Link>
          <ul className="nav-menu">
            {links.map((item, index) => {
              const { text, url, icon } = item;
              return (
                <li key={index}>
                  {icon}
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  z-index: 1;
  .headerGrid {
    display: grid;
    grid-template-columns: minmax(3vw, 1fr) minmax(auto, 1088px) minmax(
        3vw,
        1fr
      );
    > * {
      grid-column: 2;
    }
    .nav {
      align-items: center;
      padding: 30px 0;
      .nav-logo {
        grid-column: span 1;
        @media (min-width: 768px) {
          grid-column: span 2;
        }
      }
      .nav-icon {
        grid-column: 4/-1;
        @media (min-width: 768px) {
          display: none;
        }
      }
      .nav-menu {
        display: none;
        @media (min-width: 768px) {
          grid-column: span 6 /-1;
          display: grid;
          grid-auto-flow: column;
          color: var(--clr-white);
          justify-content: flex-end;
          font-family: var(--subtitle-font);
          column-gap: 20px;
          font-weight: 300;
          li {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            column-gap: 5px;
            transition: var(--transition);
            :hover{
            color: var(--clr-middle-orange);
          }
          }
        }
      }
    }
  }
`;

export default Navbar;
