import React, { useContext } from 'react'
import styled from 'styled-components'
import { GatsbyContext } from '../context/context'
import { FaTimes } from 'react-icons/fa';
import dogs from "../constants/dogs";

const Modal = () => {
  const { closeModal,value } = useContext(GatsbyContext)
  const { src,name, age,gender,persona} = dogs[value]
  return (
    <Wrapper>
      <div className="MuiBackdrop-root" onClick={closeModal}></div>
      <div className="modal-container grid12">
        <img src={src} alt="moal"/>
        <dl>
          <dt>名前</dt>
          <dd>{name}</dd>
          <dt>年齢</dt>
          <dd>{age}</dd>
          <dt>性別</dt>
          <dd>{gender}</dd>
          <dt>性格</dt>
          <dd>{persona}</dd>
        </dl>
        <button className="btn btn-close" onClick={closeModal}>
          <FaTimes/>
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
position: fixed;
inset: 0px;
z-index:1000;
display: grid;
place-items: center;
transition: var(--transition);
.MuiBackdrop-root{
	position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
	z-index: -1;
	background-color: rgb(0 0 0 / 72%);
}
.modal-container{
  width: 90vw;
  height: 70vh;
  max-width: 800px;
  position: relative;
  background-color: var(--clr-white);
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  row-gap: 10px;
  img{
    width: 100%;
    height: 30vh;
    border-radius: 8px;
  }
  dt{
    font-weight: bold;
    font-size: 16px;
  }
  dd{
    margin-left: 20px;
      margin-bottom: 10px;
  }
  .btn-close{
    width: 20p;
    font-size: 30px;
    color: var(--clr-orange);
  }
  @media (min-width: 768px) {

    height: 50vh;
    img{
      height: 40vh;
      grid-column: span 6;
    }
    dl{
      grid-column: span 6 / -1;
    }
  }
  .btn-close{
    position: absolute;
    top: 0;
    right: -20px;
  }
}

`

export default Modal
