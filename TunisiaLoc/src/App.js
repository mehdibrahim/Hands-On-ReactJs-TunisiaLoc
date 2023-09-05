import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import formulaire from "./components/pages/formulaire";

import Maps from "./components/pages/Maps";
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path='/formulaire' component={formulaire}/>
                    <Route path='/Maps' component={Maps}/>
                    
                </Switch>
               
            </div>
        </Router>
    )
}

