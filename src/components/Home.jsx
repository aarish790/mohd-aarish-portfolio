import React from 'react';
import { borders } from '@material-ui/system';
import BorderWrapper from 'react-border-wrapper';
import Footer from './Footer';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Zoom from '@material-ui/core/Zoom';

function Home() {
  return (
    <div className='mt-5 d-flex justify-content-left' className='container'>
      <Zoom in={true}>
        <h1
          className='m-3 d-flex justify-content-center'
          className='mainheading'
        >
          <big>MY PORTFOLIO</big>
        </h1>
      </Zoom>
      <Zoom in={true}>
        <h5 className='m-3 d-flex justify-content-center' className='para'>
          Explore this site to learn more about me!
        </h5>
      </Zoom>
      <Zoom in={true}>
        <img
          className='circle-img'
          align='left'
          src='https://scontent.fagr1-1.fna.fbcdn.net/v/t1.0-9/c0.0.532.532a/s851x315/74240094_2557613224518096_5572545862686474240_o.jpg?_nc_cat=103&_nc_sid=da31f3&_nc_ohc=3L9kP-prnA8AX8vDgjy&_nc_ht=scontent.fagr1-1.fna&oh=9e6104a2b7524bc2f72b15f1e7256ac3&oe=5F421527'
          alt='avatar_img'
        />
      </Zoom>
      {/* <BorderWrapper borderColour="green" borderRadius="-1px"> */}

      <Zoom in={true}>
        <h4 className='m-3 d-flex justify-content-left' className='h'>
          <i>
            <big>HELLO, I'M</big>
          </i>
        </h4>
      </Zoom>
      <Zoom in={true}>
        <h1 className='m-3 d-flex justify-content-left' className='g'>
          <big>MOHD AARISH SIDDIQUI</big>
        </h1>
      </Zoom>
      <Zoom in={true}>
        <h4 className='m-3 d-flex justify-content-left' className='i'>
          <i>
            <big>
              Electronics & Communication 4th year Student,and Full Stack Web
              Developer
            </big>
          </i>
        </h4>
      </Zoom>

      {/* <Zoom in={true}><h4 className="m-3 d-flex justify-content-left" className="j"><i><big></big></i></h4></Zoom> */}

      {/* </BorderWrapper> */}
      <Footer />
    </div>
  );
}

export default Home;
