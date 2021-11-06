import React, { useState } from 'react'

const GatsbyContext = React.createContext();

const GatsbyProvider = ({ children }) => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [value, setValue] = useState(0)

  const openModal = (i) => {
    setisModalOpen(true)
    setValue(i)
  }
  const closeModal = () => {
    setisModalOpen(false)
  }


  return (
    <GatsbyContext.Provider
      value={{ isModalOpen, openModal, closeModal, setValue,value }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider };