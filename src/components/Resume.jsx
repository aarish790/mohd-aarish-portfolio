import React, { Component } from 'react';
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
// var Mailto = require('react-mailto');

function Mailto({ email, subject, body, ...props }) {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ''
      }&body=${encodeURIComponent(body) || ''}`}
    >
      {props.children}
    </a>
  );
}
function Resume() {
  return (
    <div className='mt-5 d-flex justify-content-left' className='wrapper'>
      <aside>
        <Zoom in={true}>
          <img
            className='circle-img1'
            align='left'
            src='https://scontent.fagr1-1.fna.fbcdn.net/v/t1.0-9/c0.0.532.532a/s851x315/74240094_2557613224518096_5572545862686474240_o.jpg?_nc_cat=103&_nc_sid=da31f3&_nc_ohc=3L9kP-prnA8AX8vDgjy&_nc_ht=scontent.fagr1-1.fna&oh=9e6104a2b7524bc2f72b15f1e7256ac3&oe=5F421527'
            alt='avatar_img'
          />
        </Zoom>
        <Zoom in={true}>
          <h1>MOHD AARISH SIDDIQUI</h1>
        </Zoom>
        <Zoom in={true}>
          <h3 className='r'>
            <DeveloperModeIcon fontSize='large'></DeveloperModeIcon>Full Stack
            Web Developer
          </h3>
        </Zoom>
        <Zoom in={true}>
          <p className='p'>
            I'm passionate about web development.I have spend some good time
            learning the concepts involved in this. I have a keen interest in
            developing some sites from school time.I want to test my skills and
            endurance in the cooperate world.This will not only help me in
            increasing my skills but also benefit others who want to learn, and
            also wanted their web app work to be done.
          </p>
        </Zoom>
        <Zoom in={true}>
          <h3 className='r'>
            <HomeIcon fontSize='large'></HomeIcon>Address
          </h3>
        </Zoom>
        <Zoom in={true}>
          <p className='p'>
            H.no: B-32,Purani Colony,Kichha Sugar Company Ltd. Kichha Udham
            Singh Nagar,Uttarakhand,263148
          </p>
        </Zoom>
        <Zoom in={true}>
          <h3 className='r'>
            <PhoneIcon fontSize='large'></PhoneIcon>Phone
          </h3>
        </Zoom>
        <Zoom in={true}>
          <p className='p'>7231060520</p>
        </Zoom>
        <Zoom in={true}>
          <h3 className='r'>
            <EmailIcon fontSize='large'></EmailIcon>Email
            <Mailto email='mdaarishsid790@gmail.com' obfuscate={true}>
              {' '}
              <big>
                <EmailIcon></EmailIcon>
              </big>
            </Mailto>
          </h3>
        </Zoom>
        <Zoom in={true}>
          <p className='p'>mdaarishsid790@gmail .com</p>
        </Zoom>
        <Zoom in={true}>
          <h3 className='r'>
            <LinkedInIcon fontSize='large'></LinkedInIcon>LinkedIn{' '}
            <big>
              <a href='https://www.linkedin.com/in/mohd-aarish-siddiqui-7529541a1/'>
                <Zoom in={true}>
                  <LinkedInIcon color='primary' fontSize='large'></LinkedInIcon>
                </Zoom>
              </a>
            </big>
          </h3>
        </Zoom>
        <Zoom in={true}>
          <p className='p'>
            https://www.linkedin.com/ in/mohd-aarish-siddiqui-7529541a1
          </p>
        </Zoom>
        <Zoom in={true}>
          <h3 className='r'>
            <GitHubIcon fontSize='large'></GitHubIcon>
            {''}Github{' '}
            <a href='https://github.com/aarish790'>
              <Zoom in={true}>
                <GitHubIcon color='inherit' fontSize='large'></GitHubIcon>
              </Zoom>
            </a>
          </h3>
        </Zoom>
        <Zoom in={true}>
          <p className='p'>https://github.com/ aarish790</p>
        </Zoom>
      </aside>

      <Zoom in={true}>
        <main>
          <Zoom in={true}>
            <h3 className='r'>
              <CastForEducationIcon fontSize='large'></CastForEducationIcon>
              {''}Education
            </h3>
          </Zoom>
          <Zoom in={true}>
            <p>
              <big>MATRICULATION</big>{' '}
              <i>from St Peter's Senior Secondary School,Kishanpur,Kichha</i>{' '}
              passed with 9.4 cgpa in CBSE Board (2013-2014)
            </p>
          </Zoom>
          <Zoom in={true}>
            <p>
              <big>INTERMEDIATE/+2</big>{' '}
              <i>from St Peter's Senior Secondary School,Kishanpur,Kichha</i>{' '}
              passed with 88.6% in CBSE board (2015-2016)
            </p>
          </Zoom>
          <Zoom in={true}>
            <p>
              <big>BACHELOR OF TECHNOLOGY (B.TECH.)</big>{' '}
              <i>from National Institute Of Technology,Uttarakhand, </i> 8.45
              cpga (upto 6th semester) (2017-2021)
            </p>
          </Zoom>
          <Zoom in={true}>
            <h3 className='r'>
              <LocalMallIcon fontSize='large'></LocalMallIcon>Experience
            </h3>
          </Zoom>
          <Zoom in={true}>
            <p>
              I am a fresher in the web development field, but eager to interact
              with new people to learn new things and enhance my skills.I have
              done some web development projects which are available at my
              github account .
            </p>
          </Zoom>
          <Zoom in={true}>
            <h3 className='r'>
              <StarsIcon fontSize='large'></StarsIcon>Certificates
            </h3>
          </Zoom>
          <Zoom in={true}>
            <p>
              Certification in{' '}
              <big>The Complete 2020 Web Development Bootcamp</big> from{' '}
              <big>Udemy</big>
            </p>
          </Zoom>
          <Zoom in={true}>
            <p>
              Certification in <big>Python</big> from{' '}
              <big>Appin Technology Lab</big>
            </p>
          </Zoom>
          <Zoom in={true}>
            <p>
              Certification in{' '}
              <big>
                MERN Stack Front To Back: Full Stack React, Redux & Node.js
              </big>{' '}
              from <big>Udemy</big>
            </p>
          </Zoom>

          <Zoom in={true}>
            <h3 className='r'>
              <ExtensionIcon fontSize='large'></ExtensionIcon>Skills
            </h3>
          </Zoom>
          <p>
            <big>Machine Learning</big>{' '}
            <big>
              <Rating
                value={4}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>Python</big>
            <big>
              {' '}
              <Rating
                value={4}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>HTML5</big>
            <big>
              {' '}
              <Rating
                value={4}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>CSS</big>{' '}
            <big>
              {' '}
              <Rating
                value={4}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>Bootstrap</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>Javascript </big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>Node.js</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>Express.js</big>{' '}
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>{' '}
            <big>Git VCS</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>EJS (Embedded Javascript Templates)</big>{' '}
            <Rating
              value={3.5}
              max={5}
              onChange={(value) => console.log(`Rated with value ${value}`)}
            />
            <big>MySQL</big>
            <big>
              {' '}
              <Rating
                value={4}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>MongoDB</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>Mongoose ODM</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>RESTful API</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>{' '}
            <big>Bcrypt</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>{' '}
            <big>Passport</big>
            <big>
              {' '}
              <Rating
                value={3}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>React.js</big>
            <big>
              {' '}
              <Rating
                value={4}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>Redux.js</big>
            <big>
              {' '}
              <Rating
                value={4}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>MERN Stack</big>
            <big>
              {' '}
              <Rating
                value={4}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>Deployment with Heroku</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>Deployment with Firebase</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>C</big>
            <big>
              {' '}
              <Rating
                value={3}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
            <big>MATLAB</big>
            <big>
              {' '}
              <Rating
                value={3.5}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </big>
          </p>
        </main>
      </Zoom>
    </div>
  );
}

export default Resume;
