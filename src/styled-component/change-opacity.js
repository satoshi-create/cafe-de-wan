/*
=============== 
change opacity
===============
*/
import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";

const Test = () => {
  const [lineLength, setLineLength] = useState(35);
  console.log(lineLength);
  const useChangeValue = (e) => {
    let changeValue = e.target.value;
    return changeValue;
  };

  const ChangeLineLength = (e) => {
    const changeValue = useChangeValue(e);
    setLineLength(changeValue);
  };

  const test = {
   op:lineLength
  };

  return (
    <div>
      <dl>
        <dt>
          行長：{lineLength}文字
          <span className="css">（ max-width: {lineLength}em; ）</span>
        </dt>
        <dd>
          <input
            type="range"
            name="range"
            min="0"
            max="1"
            step="0.05"
            defaultValue={lineLength}
            onChange={ChangeLineLength}
          />
        </dd>
      </dl>
      <P test={test}>本文です</P>
    </div>
  );
};

const P = styled.p`
  opacity: ${(props) => props.test.op};
  `

export default Test;

/*
=============== 
change opacity - double image
===============
*/

import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import rocketImg from "../../images/rocket.jpg";
import sasukeImg from "../../images/sasuke.jpg";
const Inner = () => {
  const [lineLength, setLineLength] = useState(35);
  console.log(lineLength);
  const useChangeValue = (e) => {
    let changeValue = e.target.value;
    return changeValue;
  };

  const ChangeLineLength = (e) => {
    const changeValue = useChangeValue(e);
    setLineLength(changeValue);
  };

  const test = {
    op: lineLength,
  };

  return (
    <Wrapper>
      <dl>
        <dt>透過度{lineLength}</dt>
        <dd>
          <input
            type="range"
            name="range"
            min="0"
            max="1"
            step="0.05"
            defaultValue={lineLength}
            onChange={ChangeLineLength}
          />
        </dd>
      </dl>
      <WrapperImg>
        <ImgOr src={rocketImg} test={test} />
        <ImgBl src={sasukeImg} test={test} />
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
  opacity: ${(props) => props.test.op};
  position: absolute;
  top: 0;
  left: 0;
`;

export default Inner;

/*
=============== 
change opacity - triple image
===============
*/
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

