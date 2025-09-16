import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);

  const SidebarOpen = () => {
    setIsSidebarOpen(true);
  };
  const SidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider value={{ isSideBarOpen, SidebarOpen, SidebarClose }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
