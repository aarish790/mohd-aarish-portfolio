import React from "react";
import { borders } from '@material-ui/system';
import BorderWrapper from 'react-border-wrapper';
import Footer from "./Footer";
import BackspaceIcon from '@material-ui/icons/Backspace';
import Zoom from '@material-ui/core/Zoom';

function Home() {
    

    return(  
     <div className = "mt-5 d-flex justify-content-left" className = "container">
        <Zoom in={true}><h1 className="m-3 d-flex justify-content-center" className = "mainheading"><big>MY PORTFOLIO</big></h1></Zoom>
        <Zoom in={true}><h5 className="m-3 d-flex justify-content-center" className = "para">Explore this site to learn more about me!</h5></Zoom>
        <Zoom in={true}>
        <img className="circle-img" align="left" src="https://scontent.fagr1-1.fna.fbcdn.net/v/t1.0-0/c0.0.206.206a/p206x206/74240094_2557613224518096_5572545862686474240_o.jpg?_nc_cat=103&_nc_sid=da31f3&_nc_ohc=yC7bdLDLugMAX_RQadg&_nc_ht=scontent.fagr1-1.fna&oh=bb2f81b52190d27b5a573152634a1448&oe=5F19B71D" alt="avatar_img" />
        </Zoom>
        {/* <BorderWrapper borderColour="green" borderRadius="-1px"> */}
        
        <Zoom in={true}><h4 className="m-3 d-flex justify-content-left" className="h"><i><big>HELLO,  I'M</big></i></h4></Zoom>
        <Zoom in={true}><h1 className="m-3 d-flex justify-content-left" className="g"><big>MOHD AARISH SIDDIQUI</big></h1></Zoom>
        <Zoom in={true}><h4 className="m-3 d-flex justify-content-left" className="i"><i><big>Electronics & Communication 4th year Student,and</big></i></h4></Zoom>
    
        <Zoom in={true}><h4 className="m-3 d-flex justify-content-left" className="j"><i><big>Full Stack Web Developer</big></i></h4></Zoom>
       
        {/* </BorderWrapper> */}
        <Footer />
       
        
     </div>


    );
    
}

export default Home;

