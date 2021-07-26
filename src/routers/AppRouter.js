//SISTEMA DE RUTAS
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { HeaderScreen } from '../components/header/HeaderScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/header" component={HeaderScreen}/>
                <Route path="/" component={DashboardRoutes}/>
            </Switch>

            <Redirect to="/home"/>
            </div>
        </Router>
    )
}
