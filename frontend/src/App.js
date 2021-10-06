import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import UserContext from "./auth/UserContext";
import HomesApi from "./api/api";
import jwt from "jsonwebtoken";
import LoadingSpinner from "./common/LoadingSpinner";
import Routes from "./routes-nav/Routes";

export const TOKEN_STORAGE_ID = "hearth-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { email } = jwt.decode(token);
            HomesApi.token = token;
            let currentUser = await HomesApi.getCurrentUser(email);
            setCurrentUser(currentUser);
          } catch (err) {
            console.log("error: ", err);
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
      }
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await HomesApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.log("sign up error: ", errors);
      return { success: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await HomesApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.log("login failed", errors);
      return { success: false, errors };
    }
  }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <Routes login={login} signup={signup} logout={logout} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
