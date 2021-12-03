import React from "react";
import styled from "styled-components";
import nikukyuWhite from "../images/nikukyu-white.svg";
import socialLinks from "../constants/socialLInks";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Wrapper className="partsGrid">
      <div className="grid12">
        <p>©2021 cafe de WON all right reserved</p>
        <ul className="sns">
          {socialLinks.map((item, index) => {
            const { url, icon } = item;
            return (
              <li key={index}>
                <Link to={url}>{icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--clr-black);
  height: 224px;
  display: grid;
  place-content: center;
  .grid12 {
    row-gap: 20px;
    p {
      color: var(--clr-white);
      font-size: 13px;
      align-self: end;
      justify-self: center;
      position: relative;
      &::after {
        content: url(${nikukyuWhite});
        position: absolute;
        bottom: -90px;
        right: -40px;
      }
    }
    .sns {
      display: grid;
      grid-template-columns: repeat(3, 35px);
      place-content: center;
      place-items: center;
      column-gap: 10px;
      font-size: 25px;
      color: var(--clr-orange);
    }
  }
`;

export default Footer;
