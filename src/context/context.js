import React, { useState } from "react";

const GatsbyContext = React.createContext();

const GatsbyProvider = ({ children }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isSidebar, setisSidebar] = useState(false);
  const [value, setValue] = useState(0);

  const openModal = (i) => {
    setisModalOpen(true);
    const clientWidth = document.body.clientWidth;
    document.querySelector("html").classList.add("open");
    const noScrollBarWidth = document.body.clientWidth;
    const diff = noScrollBarWidth - clientWidth;
    if (diff > 0) {
      document.body.style["padding-right"] = diff + "px";
    }
    setValue(i);
  };
  const closeModal = () => {
    document.querySelector("html").classList.remove("open");
    document.body.style["padding-right"] = "0px";
    setisModalOpen(false);
  };

  const openSidebar = () => {
    setisSidebar(true);
    document.querySelector("html").classList.add("open");
  };
  const closeSidebar = () => {
    setisSidebar(false);
    document.querySelector("html").classList.remove("open");
  };

  return (
    <GatsbyContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        setValue,
        value,
        isSidebar,
        openSidebar,
        closeSidebar,
        
      }}
    >
      {children}
    </GatsbyContext.Provider>
  );
};

export { GatsbyContext, GatsbyProvider };
