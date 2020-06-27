import React,{useState} from "react";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./Navbar";



function App() {

    
    return(
        <BrowserRouter>
            <Nav />
            
            <div className="container">
                <Switch>
                    <Route path = '/' component={Home} exact />
                    <Route path = '/Resume' component = {Resume} />
                    <Route path = '/Contact' component = {Contact} />
                    <Route path = '/Project' component = {Project} />
                </Switch>

            
                

            </div>
            
            
        </BrowserRouter>
    );
}
export default App;