import React,{useContext}  from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";
import { GatsbyContext } from '../context/context'
import "../css/main.css"
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { isModalOpen,isSidebar } = useContext(GatsbyContext)

  return (
    <>
      <Navbar />
      <Sidebar/>
      {/* {isSidebar && <Sidebar/>} */}
      {children}
      <Footer />
      <Modal/>
      {/* {isModalOpen && <Modal/>} */}
    </>
  )
}

export default Layout
