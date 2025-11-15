import { createContext, useState, useContext } from 'react';

const ContextUnsplash = createContext();

export const ProviderUnsplash = ({ children }) => {
  const [isTemp, setIsTemp] = useState(false);
  return (
    <ContextUnsplash.Provider
      value={{ isTemp, setIsTemp }}
    >
      {children}
    </ContextUnsplash.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ContextUnsplash);
};