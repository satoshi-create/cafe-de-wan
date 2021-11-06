import React,{useContext}  from 'react'
import styled from 'styled-components'
import { GatsbyContext } from '../context/context'

const Modal = () => {
  const { closeModal } = useContext(GatsbyContext)
  return (
    <Wrapper>
      <div className="modal-container">
        <h3>modal window</h3>
        <button className="btn btn-close" onClick={closeModal}>cls</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index:100;
display: grid;
background: rgba(0,0,0,.5);
place-content: center;
transition: var(--transition);
.modal-container{
  width: 90vw;
  height: 30vh;
  border-radius: 25px;
  max-width: 620px;
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
  background-color: var(--clr-white);
  .btn-close{
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

`

export default Modal
