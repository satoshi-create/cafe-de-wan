import React, { useState } from "react";

const GatsbyContext = React.createContext();

const GatsbyProvider = ({ children }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isSidebar, setisSidebar] = useState(false);
  const [value, setValue] = useState(0);

  console.log(isSidebar);

  const openModal = (i) => {
    setisModalOpen(true);
    setValue(i);
  };
  const closeModal = () => {
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
