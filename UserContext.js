import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState(null);

  return (
    <UserContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </UserContext.Provider>
  );
};