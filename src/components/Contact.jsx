import React from "react";
import {Jumbotron} from "react-bootstrap";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import Zoom from '@material-ui/core/Zoom';
import Footer from "./Footer";







function Contact(){
    return(  
        <div className = "mt-5 d-flex justify-content-left" className="container">
        <Jumbotron className="jumbotron">
        
        
        <Zoom in={true}><h3 className="x"><big>CONTACT ME:</big></h3></Zoom>
        <Zoom in={true}><p className="o"><CallIcon fontSize="large"></CallIcon> <big>7231060520</big></p></Zoom>
        <Zoom in={true}><p className="o"><EmailIcon fontSize="large"></EmailIcon><big>mdaarishsid790@gmail.com</big></p></Zoom>
      
        
           
        
        
        
        </Jumbotron>
        <Footer />
        </div>
        


    );

}
export default Contact;

