import React from 'react'
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import DashboardDesign from "../Project/DashboardDesign";
import DashboardConfiguration from "../Project/DashboardConfiguration";
import "./App.css";
import {BrowserRouter as  Router, Switch , Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Hero/>

      <Switch>

        <Route exact path="/"><DashboardDesign/></Route>
        <Route exact path="/dashboardconfiguration"><DashboardConfiguration/></Route>
     
      </Switch>
    </Router>
    </>
  )
}

export default App
