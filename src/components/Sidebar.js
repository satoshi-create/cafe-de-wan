import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import links from "../constants/links";
import socialLinks from "../constants/socialLInks";
import { CgCloseR } from "react-icons/cg";
import { GatsbyContext } from "../context/context";

const Sidebar = () => {
  const { closeSidebar} = useContext(GatsbyContext);
  return (
    <Wrapper>
      <aside className="sidebar">
        <button className="btn close-btn" onClick={closeSidebar}>
          <CgCloseR />
        </button>
        <ul className="sidebar-menu">
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
        <ul className="sns">
          {socialLinks.map((item, index) => {
            const { url, icon } = item;
            return (
              <li key={index}>
                <Link to={url} onClick={closeSidebar}>{icon}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  z-index: 555;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000c9;
  display: grid;
  place-content: center;
  .sidebar {
    width: 90vw;
    height: 90vh;
    display: grid;
    justify-items: center;
    color: var(--clr-white);
    position: relative;
    row-gap: 30px;
    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 40px;
      color: var(--clr-white);
    }
    .sidebar-menu {
      align-self: flex-end;
      font-size: 30px;
      font-weight: 300;
      font-family: var(--subtitle-font);
      display: grid;
      row-gap: 10px;
      justify-items: center;
      li {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        column-gap: 5px;
      }
    }
    .sns {
      display: grid;
      grid-auto-flow: column;
      column-gap: 5px;
      font-size: 30px;
      color: var(--clr-orange);
    }
  }
`;

export default Sidebar;
