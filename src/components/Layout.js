import React,{useContext}  from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";
import { GatsbyContext } from '../context/context'

const Layout = ({ children }) => {
  const { isModalOpen } = useContext(GatsbyContext)

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {isModalOpen && <Modal/>}
    </>
  )
}

export default Layout
