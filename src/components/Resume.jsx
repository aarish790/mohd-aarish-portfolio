import React,{Component} from "react";
import Rating from 'material-ui-rating';
import Zoom from '@material-ui/core/Zoom';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import StarsIcon from '@material-ui/icons/Stars';
import ExtensionIcon from '@material-ui/icons/Extension';



function Resume() {


    return(  
      <div className = "mt-5 d-flex justify-content-left" className="wrapper">


        <aside>
          <Zoom in={true}><img className="circle-img1" align="left" src="https://scontent.fagr1-1.fna.fbcdn.net/v/t1.0-0/c0.0.206.206a/p206x206/74240094_2557613224518096_5572545862686474240_o.jpg?_nc_cat=103&_nc_sid=da31f3&_nc_ohc=yC7bdLDLugMAX_RQadg&_nc_ht=scontent.fagr1-1.fna&oh=bb2f81b52190d27b5a573152634a1448&oe=5F19B71D" alt="avatar_img" /></Zoom>
          <h1>MOHD AARISH SIDDIQUI</h1>
          <h3 className="r"><DeveloperModeIcon fontSize="large"></DeveloperModeIcon>Full Stack Web Developer</h3>
          <p className="p">I'm passionate about web development.I had spend some good time learning the concepts involved in this. I have a keen interest in developing some sites from school time.I want to test my skills and endurance in the cooperate world.This will not only help in increasing my skills but also benefit others who want to learn this and also wanted their website work to be done.</p>
          <h3 className="r"><HomeIcon fontSize="large"></HomeIcon>Address</h3>
          <p className="p">H.no: B-32,Purani Colony,Kichha Sugar Company Ltd. Kichha Udham Singh Nagar,Uttarakhand,263148</p>
          <h3 className="r"><PhoneIcon fontSize="large"></PhoneIcon>Phone</h3>
          <p className="p">7231060520</p>
          <h3 className="r"><EmailIcon fontSize="large"></EmailIcon>Email</h3>
          <p className="p">mdaarishsid790@gmail.com</p>
          <h3 className="r"><LinkedInIcon fontSize="large"></LinkedInIcon>LinkedIn</h3>
          <p className="p">https://www.linkedin.com/in/mohd-aarish-siddiqui-7529541a1</p>
          <h3 className="r"><GitHubIcon fontSize="large"></GitHubIcon>{''}Github</h3>
          <p className="p">https://github.com/aarish790</p>

        </aside>

        <main><h3 className="r"><CastForEducationIcon fontSize="large"></CastForEducationIcon>{''}Education</h3>
        <p><big>MATRICULATION</big> <i>from St Peter Senior Secondary School,Kishanpur,Kichha</i>{' '}
        passed with 9.4 cgpa in CBSE Board (2013-2014)</p>
        <p><big>INTERMEDIATE/+2</big> <i>from St Peter Senior Secondary School,Kishanpur,Kichha</i>{' '}
        passed with 88.6% in CBSE board (2015-2016)</p>
        <p><big>BACHELOR OF TECHNOLOGY (BTECH.)</big> <i>from National Institute Of Technology,Uttarakhand,{' '}</i>{' '}
        8.35 cpga (upto 5th semester) (2017-2021)</p>
        <h3 className="r"><LocalMallIcon fontSize="large"></LocalMallIcon>Experience</h3>
        <p>I am a fresher in the web development field, but eager to interact with new people to learn new things and enhance my skills.I have done some practice web development projects which are available at my github account
        .</p>
        <h3 className="r"><StarsIcon fontSize="large"></StarsIcon>Certificates</h3>
        <p>Certification in <big>Full Stack Web Development</big> from <big>Udemy</big></p>                                                                                             
        <p>Certification in <big>Python</big> from <big>Appin Technology Lab</big></p>
      
        <h3 className="r"><ExtensionIcon fontSize="large"></ExtensionIcon>Skills</h3>
        <p><big>Machine learning</big>  <Rating
          value={4}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>Python</big> <Rating
          
          value={4}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        />
        <big>Java (Netbeans IDE Platform)</big><Rating
          value={3}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        />
        <big>HTML</big> <Rating
          value={4}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>Javascript</big> <Rating
          value={4}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>SQL </big><Rating
          value={4}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>CSS </big><Rating
          value={3.5}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        
        /><big>C</big> <Rating
          value={2.5}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>MongoDB</big> <Rating
          value={3.5}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        />    <big>Git version control</big> <Rating
          value={3.5}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>MERN Stack</big> <Rating
          value={3.5}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>Mongoose</big> <Rating
          value={3}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>React</big><Rating
          value={3.5}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>Verilog</big><Rating
          value={3}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>Matlab</big><Rating
          value={3.5}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /><big>LT Spice</big><Rating
          value={3.5}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
         
        /></p>
      
       
          
          
        


        
        
        </main>

        
      </div>


    );

}

export default Resume;

