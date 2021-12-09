import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import rocketImg from "../../images/rocket.jpg";
import sasukeImg from "../../images/sasuke.jpg";
import ridhiaImg from "../../images/ridhia.jpg";

const Inner = () => {
  const [imgOpacity, setImgOpacity] = useState(1);
  const [imgOpacityRidhia, seimgOpacityRidhia] = useState(1);

  const useChangeValue = (e) => {
    let changeValue = e.target.value;
    return changeValue;
  };

  const ChangeImgOpacityRidhia = (e) => {
    const changeValue = useChangeValue(e);
    seimgOpacityRidhia(changeValue);
  };

  const ChangeImgOpacity = (e) => {
    const changeValue = useChangeValue(e);
    setImgOpacity(changeValue);
  };

  const test = {
    sasuke: {
      name: "sasuke",
      src: imgOpacity,
    },
    ridhia: {
      name: "ridhia",
      src: imgOpacityRidhia,
    },
  };

  return (
    <Wrapper>
      <dl>
        <dt>
          {test.ridhia.name}:透過度{imgOpacityRidhia}
        </dt>
        <dd>
          <input
            type="range"
            name="range"
            min="0"
            max="1"
            step="0.05"
            defaultValue={imgOpacityRidhia}
            onChange={ChangeImgOpacityRidhia}
          />
        </dd>
        <dt>
          {test.sasuke.name}:透過度{imgOpacity}
        </dt>
        <dd>
          <input
            type="range"
            name="range"
            min="0"
            max="1"
            step="0.05"
            defaultValue={imgOpacity}
            onChange={ChangeImgOpacity}
          />
        </dd>
      </dl>
      <WrapperImg>
        <ImgOr src={rocketImg} test={test} />
        <ImgBl src={sasukeImg} test={test} />
        <ImgOp src={ridhiaImg} test={test} />
      </WrapperImg>
      {/* <P test={test}>本文です</P> */}
    </Wrapper>
  );
};

const pageSize = css`
  display: grid;
  grid-template-columns: 6vw auto 6vw;
  > * {
    grid-column: 2;
  }
`;
const Wrapper = styled.div`
  ${pageSize}
`;

const WrapperImg = styled.div`
  position: relative;
`;

const ImgOr = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 30px;
`;
const ImgBl = styled(ImgOr)`
  opacity: ${(props) => props.test.sasuke.src};
  position: absolute;
  top: 0;
  left: 0;
`;
const ImgOp = styled(ImgOr)`
  opacity: ${(props) => props.test.ridhia.src};
  position: absolute;
  top: 0;
  left: 0;
`;

export default Inner;
