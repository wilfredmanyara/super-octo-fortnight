import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";
import HomeContent from "../components/dashboard/HomeContent";
import HomesList from "../components/homes/homesList";
import UserAccount from "../components/UserAccount";

function Routes({ login, signup, logout }) {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <SignIn login={login} />
        </Route>

        <Route exact path="/signup">
          <SignUp signup={signup} />
        </Route>

        <PrivateRoute exact path="/dashboard">
          <Dashboard logout={logout}>
            <HomeContent />
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute exact path="/home-list">
          <Dashboard logout={logout}>
            <HomesList />
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute exact path="/my-account">
          <Dashboard logout={logout}>
            <UserAccount />
          </Dashboard>
        </PrivateRoute>

        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default Routes;
