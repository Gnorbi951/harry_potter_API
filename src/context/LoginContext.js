import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = props => {
  const [validLogin, setValidLogin] = useState("");

  return (
    <LoginContext.Provider value={[validLogin, setValidLogin]}>
      {props.children}
    </LoginContext.Provider>
  );
};
