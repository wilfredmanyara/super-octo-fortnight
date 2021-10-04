import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Dashboard";

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
                    <Dashboard logout={logout}/>
                </PrivateRoute>

                <Redirect to="/login" />

            </Switch>

        </div>
    )
}

export default Routes;