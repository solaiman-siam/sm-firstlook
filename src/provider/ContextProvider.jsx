import { useState } from "react";
import { MainContext } from "./context";

// Create the context


// Create the provider component
function ContextProvider({ children }) {
  const [isToggle, setIsToggle] = useState(false);

  const stateInfo = {
    isToggle,
    setIsToggle,
  };

  return (
    <MainContext.Provider value={stateInfo}>
      {children}
    </MainContext.Provider>
  );
}

export default ContextProvider;
