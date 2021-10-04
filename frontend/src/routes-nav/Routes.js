import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import HomesList from "../components/homes/homesList";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Dashboard";

function Routes({ login, signup }) {

    return (
        <div>

            <Switch>

                <Route exact path="/login">
                    <SignIn login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignUp signup={signup} />
                </Route>

                <PrivateRoute exact path="/">
                    <Dashboard />
                </PrivateRoute>

                <Redirect to="/login" />

            </Switch>

        </div>
    )
}

export default Routes;