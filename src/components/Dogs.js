import React, { useContext } from "react";
import styled from "styled-components";
import fukidashiSp from "../images/fukidashi-sp.svg";
import fukidashiPc from "../images/fukidashi-pc.svg";
import { GatsbyContext } from "../context/context";
import dogs from "../constants/dogs";
import asiato from "../images/asiato.svg";
import ButtonNikukyu from "./ButtonNikukyu";

// const test = {
//   clr: "red",
// };

const Dogs = () => {
  const { openModal, catIndex, setCatIndex } = useContext(GatsbyContext);
  const { id, cat, set } = dogs[catIndex];

  return (
    <Wrapper className="partsGrid">
      <div className="grid12">
        <div className="section-title even">
          <h2>OUR FAMILY</h2>
          <div className="underline"></div>
          <h3>
            私たちの大切な
            <br />
            パートナーです
          </h3>
        </div>
        <div className="cat-conteiner">
          {dogs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setCatIndex(index)}
                className={`btn cat-btn ${index === catIndex && "active-btn"}`}
              >
                {item.cat}
              </button>
            );
          })}
        </div>
        {set.map((item, index) => {
          const { id, name, src,clr } = item;
          return (
            <>
              <button
                className="btn dog-fig"
                onClick={() => openModal(index)}
                key={id}
              >
                <Img src={src} alt={name} className="dog-img" clr={clr} />
                {/* <img src={src} alt={name} className="dog-img" test={test} /> */}
              </button>
              {/* <P test={test}>テスト</P> */}
            </>
          );
        })}
        <ButtonNikukyu />
      </div>
      <div class="custom-shape-divider-top-1636126753">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="custom-shape-divider-bottom-1636127149">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </Wrapper>
  );
};

const Img = styled.img`
  /* border:8px solid ${(props) => props.test}; */
  border: 4px solid #c21500;
  border-image: ${(props) => props.clr};
  border-image-slice: 1;
`;

const Wrapper = styled.section`
  background-color: var(--clr-light-orange);
  padding: 145px 0 534px 0;
  position: relative;
  overflow: hidden;
  .grid12 {
    row-gap: 22px;
    position: relative;
    .cat-conteiner {
      justify-self: center;
      display: grid;
      grid-auto-flow: column;
      column-gap: 10px;
      padding: 100px 0;
      @media (min-width: 768px) {
        column-gap: 40px;
        padding: 150px 0;
      }
      .cat-btn {
        font-size: 60px;
        color: var(--clr-black);
        font-family: var(--site-font);
        text-transform: capitalize;
        line-height: 1.5;
        :hover {
          box-shadow: 0 4px var(--clr-orange);
          color: var(--clr-orange);
        }
      }
      .active-btn {
        box-shadow: 0 4px var(--clr-orange);
        color: var(--clr-orange);
      }
    }
    .dog-fig {
      justify-self: flex-start;
    }
    .dog-fig:nth-child(odd) {
      justify-self: flex-end;
    }
    @media (min-width: 768px) {
      .section-title.even {
        margin-bottom: 0px;
      }
      .dog-fig:not(:first-child) {
        margin-top: -80px;
      }
      .dog-fig:nth-child(3) {
        margin-left: 100px;
        justify-self: flex-start;
      }
      .dog-fig:nth-child(4) {
        justify-self: flex-end;
      }
      .dog-fig:nth-child(5) {
        justify-self: center;
      }
      .dog-fig:nth-child(6) {
        justify-self: flex-start;
      }
      .dog-fig:nth-child(7) {
        justify-self: flex-end;
      }
      .dog-fig:nth-child(8) {
        justify-self: center;
      }
    }
    &:before {
      content: url(${fukidashiSp});
      display: block;
      position: absolute;
      top: -100px;
      right: -60px;
      z-index: 1;
      @media (min-width: 768px) {
        content: url(${fukidashiPc});
        top: -140px;
        right: -110px;
      }
    }
    &:after {
      content: url(${asiato});
      display: block;
      position: absolute;
      bottom: -160px;
      left: 0;
    }
  }
  .fukidashi {
    position: absolute;
    position: absolute;
    top: 70px;
    right: 0;
    width: 327px;
    height: 250px;
    z-index: 1;
    @media (min-width: 768px) {
      width: 438px;
      height: 333px;
      top: 30px;
    }
  }
  .dog-img {
    width: 190px;
    height: 190px;
    /* border-radius: 50%; */
    /* border: 8px solid; */
    /* border:${(props) => props.test.clr}; */
    box-shadow: 1px 1px 5px rgba(20, 20, 20, 0.2);
    @media (min-width: 1088px) {
      width: 250px;
      height: 250px;
      top: 30px;
    }
  }
  .wave-top {
    grid-column: 1/-1;
    position: absolute;
    top: -120px;
    left: 0;
  }
  .custom-shape-divider-top-1636126753 {
    grid-column: 1/-1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1636126753 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
  }

  .custom-shape-divider-top-1636126753 .shape-fill {
    fill: #ffffff;
  }
  .custom-shape-divider-bottom-1636127149 {
    grid-column: 1/-1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-bottom-1636127149 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
  }

  .custom-shape-divider-bottom-1636127149 .shape-fill {
    fill: #ffffff;
  }
`;

export default Dogs;
