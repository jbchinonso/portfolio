import React, { createContext, useContext, useState } from "react";

interface IhamburgerContext{
    open: boolean, 
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

interface Ichildren{
    children: JSX.Element
}

const defaultState = {
  open: false,
  setOpen: () => {}
}

const hamburgerContext = createContext<IhamburgerContext>(defaultState);

const HamburgerContextProvider: React.FC<Ichildren> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const value = { open, setOpen };

  return (
    <hamburgerContext.Provider value={value}>
      {children}
    </hamburgerContext.Provider>
  );
};


const useHamburgerContext = () => {
  const context = useContext(hamburgerContext);
  return context
}


export { HamburgerContextProvider, useHamburgerContext };