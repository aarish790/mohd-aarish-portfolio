import React,{useState} from "react";
import {Link} from "react-router-dom";
// import {Navbar, Nav} from "react-bootstrap";

function Nav(){

    const navstyle = {
        color: 'white'
    };

  

    return(

        <nav>
            
            <ul className = "Nav-links">
               <Link to="/" style={navstyle}> <li>Home</li></Link>
               <Link to="/Resume" style={navstyle}> <li>Resume</li></Link>
               <Link to="/Project" style={navstyle}> <li>Projects</li></Link>
               <Link to="Contact" style={navstyle}> <li>Contact</li></Link>
            </ul>
        </nav>
    );
}
export default Nav;