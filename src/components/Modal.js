import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GatsbyContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import dogs from "../constants/dogs";
import siteTitle from "../images/site-title.svg";
import nikukyuOrange from "../images/nikukyu-orange.svg";
import nikukyuBlue from "../images/nikukyu-blue.svg";

const Modal = () => {
  const { closeModal, value, catIndex,isModalOpen } = useContext(GatsbyContext);
  const { cls, cat, set,bln } = dogs[catIndex];
  const { id, name, src, age, gender, persona } = set[value];
  

  return (
    <Wrapper clicked ={isModalOpen}> 
      <div className="MuiBackdrop-root" onClick={closeModal}></div>
      <div className={`modal-container grid12 ${cls}`}>
        <button className="btn btn-close" onClick={closeModal}>
          <FaTimes />
        </button>
        <h4>{`cafe de ${cat}`}</h4>
        <img src={src} alt={name} />
        <dl className="grid12">
          <dt>名前</dt>
          <dd>{name}</dd>
          <dt>年齢</dt>
          <dd>{age}</dd>
          <dt>性別</dt>
          <dd>{gender}</dd>
          <dt>性格</dt>
          <dd>{persona}</dd>
        </dl>
        <img
        // src={bold && `${nikukyuOrange}`}
        src={bln ? `${nikukyuOrange}` : `${nikukyuBlue}`}
        //  src={`${bln} && ${nikukyuOrange}`}
         alt="nikukyu-img"
          className="icon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  inset: 0px;
  z-index: 1000;
  display: grid;
  place-items: center;
  transition: var(--transition);
  transform: scale(0,0);
  transform: scale(${({ clicked }) => clicked && (1,1) });
  .MuiBackdrop-root {
    position: fixed;
    inset: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgb(0 0 0 / 72%);
  }
  .modal-container.dog {
    background-color: var(--clr-skyblue);
  }
  .modal-container.dog .btn-close {
    color: var(--clr-orange);
    background-color: var(--clr-skyblue);
  }
  .modal-container.cat {
    background-color: var(--clr-light-orange);
  }
  .modal-container.cat .btn-close {
    color: var(--clr-middle-blue);
  }
  .modal-container.cat h4 {
    color: var(--clr-middle-blue);
  }
  .modal-container {
    width: 90vw;
    height: 90vh;
    max-width: 800px;
    border-radius: 8px;
    padding: 20px;
    align-items: center;
    row-gap: 10px;
    position: relative;
    .btn-close {
      width: 20p;
      font-size: 30px;
    }
    h4 {
      font-family: var(--site-font);
      font-weight: bold;
      color: var(--clr-orange);
      font-size: 30px;
      text-align: right;
      transform: rotate(27deg);
      position: absolute;
      top: 50px;
      right: -15px;
      text-transform: uppercase;
    }
    img {
      width: 100%;
      height: 30vh;
      border-radius: 8px;
    }
    dl {
      align-self: flex-start;
      row-gap: 10px;
      font-family: var(--subtitle-font);
      position: relative;
      dt {
        font-weight: bold;
        font-size: 16px;
        grid-column: span 1;
      }
      dd {
        grid-column: span 3;
        justify-self: flex-start;
      }
    }
    .icon {
      width: 40px;
      height: 40px;
      /* content: url(${nikukyuOrange}); */
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    @media (min-width: 768px) {
      height: 60vh;
      h4 {
        top: 63px;
        right: 313px;
      }
      img {
        height: 40vh;
        grid-column: span 6;
      }
      dl {
        align-self: center;
        grid-column: span 6 / -1;
        row-gap: 30px;
        dt {
          grid-column: span 2;
        }
        dd {
          grid-column: span 10/-1;
          justify-self: flex-start;
        }
      }
    }
    .btn-close {
      position: absolute;
      top: 0;
      right: -20px;
    }
    /* &::after {
      content: url(${nikukyuOrange});
      position: absolute;
      bottom: 10px;
      right: 10px;
    } */
  }
`;

export default Modal;
