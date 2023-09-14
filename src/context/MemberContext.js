import { createContext, useState } from "react";

export const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [total, setTotal] = useState("");

  function handleTotal(data) {
    setTotal(data);
  }
  return (
    <MemberContext.Provider value={{ total, handleTotal }}>
      {children}
    </MemberContext.Provider>
  );
};
