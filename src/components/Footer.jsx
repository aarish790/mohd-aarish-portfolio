import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Zoom from '@material-ui/core/Zoom';
function Footer() {
  const year = new Date().getFullYear();
  return (
  <footer className="container">
  <Zoom in={true}><p>Copyright ⓒ {year}
 
  <a href = "https://www.facebook.com/armaan.siddiqui.790"><Zoom in={true}><FacebookIcon  color="primary" fontSize="large"></FacebookIcon></Zoom></a>
  <a href = "https://github.com/aarish790"><Zoom in={true}><GitHubIcon color="inherit" fontSize="large"></GitHubIcon></Zoom></a>
  <a href = "https://twitter.com/AarishMd"><Zoom in={true}><TwitterIcon fontSize="large"></TwitterIcon></Zoom></a>
  <a href = "https://www.instagram.com/md_aarishsid11/"><Zoom in={true}><InstagramIcon  color="secondary" fontSize="large"></InstagramIcon></Zoom></a>
  <a href = "https://www.linkedin.com/in/mohd-aarish-siddiqui-7529541a1/"><Zoom in={true}><LinkedInIcon  color="primary" fontSize="large"></LinkedInIcon></Zoom></a>
    </p></Zoom>
    
  </footer>

    
  );
}

export default Footer;