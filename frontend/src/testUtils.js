import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
  email: "email@gmail.com",
  firstName: "Hello",
  lastName: "World",
  password: "password",
};

const UserProvider = ({ children, currentUser = demoUser }) => (
  <UserContext.Provider value={{ currentUser }}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
