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
