import React, { useState } from 'react'

const GatsbyContext = React.createContext();

const GatsbyProvider = ({ children }) => {
  const [isModalOpen, setisModalOpen] = useState(false)

  const openModal = () => {
    setisModalOpen(true)
  }
  const closeModal = () => {
    setisModalOpen(false)
  }
  return (
    <GatsbyContext.Provider 
    value={{isModalOpen, openModal, closeModal}}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider };