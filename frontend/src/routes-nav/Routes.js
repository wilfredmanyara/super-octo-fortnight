import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import HomesList from "../homes/homesList";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";
import PrivateRoute from "./PrivateRoute";

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
                    <HomesList />
                </PrivateRoute>

                <Redirect to="/login" />

            </Switch>

        </div>
    )
}

export default Routes;