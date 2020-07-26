import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import GitHubIcon from '@material-ui/icons/GitHub';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { Link } from 'react-router-dom';
import OpacityIcon from '@material-ui/icons/Opacity';
import NoteIcon from '@material-ui/icons/Note';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import CreateIcon from '@material-ui/icons/Create';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

function Project() {
  return (
    <div className='mt-5 d-flex justify-content-left' className='container'>
      <Zoom in='true'>
        <img
          className='circle-img2'
          align='left'
          src='https://scontent.fagr1-1.fna.fbcdn.net/v/t1.0-9/c0.0.684.684a/s851x315/62177861_2442764206002999_4069313133062127616_o.jpg?_nc_cat=104&_nc_sid=da31f3&_nc_ohc=KgM-wI6gM4kAX8bQExy&_nc_ht=scontent.fagr1-1.fna&oh=21bdd26c8e501b7707f84bb9b46445ef&oe=5F1DB21B'
          alt='avatar_img'
        />
      </Zoom>

      <p className='o'>
        <DeveloperModeIcon color='primary' fontSize='large'></DeveloperModeIcon>
        <big>ENGINEERS CONNECT -</big> A MERN Stack Web app in which you can
        create a student/engineer portfolio, share posts and can get help from
        other students/engineers. You can also add comments and can like and
        unlike them as well. Bcrypt with json web token is used for
        authentication (SignIn/SignUp). It is a Social Network for Engineers.{' '}
        {'     '}
        <form
          method='get'
          action='https://github.com/aarish790/Engineers_Connect'
        >
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button'
            >
              Github
            </button>
          </Zoom>
        </form>
        <form method='get' action='https://sleepy-dusk-08610.herokuapp.com/'>
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button1'
            >
              Run App Now
            </button>
          </Zoom>
        </form>
      </p>

      <p className='o'>
        <ApartmentIcon color='secondary' fontSize='large'></ApartmentIcon>
        <big>
          EARTHQUAKE DAMAGE IDENTIFICATION IN BUILDINGS USING MACHINE LEARNING
          ALGORITHM
        </big>{' '}
        {'     '}
        <form
          method='get'
          action='https://github.com/aarish790/EARTHQUAKE-DAMAGE-IDENTIFICATION-IN-BUILDINGS-USING-MACHINE-LEARNING-ALGORITHM'
        >
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button'
            >
              Github
            </button>
          </Zoom>
        </form>
        <OpacityIcon color='primary' fontSize='large'></OpacityIcon>
        <big>FLOOD EXTENT ON SAR IMAGES USING A SUPERVISED CLASSIFIER</big>{' '}
        {'     '}
        <form
          method='get'
          action='https://github.com/aarish790/Flood-Extent-on-SAR-Images-Using-a-Supervised-Classifier-'
        >
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button'
            >
              Github
            </button>
          </Zoom>
        </form>
        <NoteIcon fontSize='large'></NoteIcon>
        <big>SECRET APP -</big> You can keep your secrets here. In this app,
        your password is protected through salting+hashing and google security.
        It is a Front-End And Back-End app i.e it is a full stack app. {'     '}
        <form
          method='get'
          action='https://github.com/aarish790/Keeping_Secrets'
        >
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button'
            >
              Github
            </button>
          </Zoom>
        </form>
        <NoteAddIcon fontSize='large'></NoteAddIcon>
        <big>KEEPER -</big> You can add your notes here. It is a Front-End React
        app.{'     '}
        <form method='get' action='https://keeper-app-5c6ff.web.app/'>
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button1'
            >
              Run App Now
            </button>
          </Zoom>
        </form>
        <form method='get' action='https://github.com/aarish790/Keeper_app'>
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button'
            >
              Github
            </button>
          </Zoom>
        </form>
        <SubscriptionsIcon color='error' fontSize='large'></SubscriptionsIcon>
        <big>NEWSLETTER SIGN UP -</big> This app basically holds the list of
        subscribers that subscribers to my newspaper. Subscribtion is done
        through API in this app and my API server keeps the record of all the
        subscribers.The subscribers list can be seen on my mailchimp account.{' '}
        {'     '}
        <form method='get' action='https://agile-cove-05256.herokuapp.com/'>
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button1'
            >
              Run App Now
            </button>
          </Zoom>
        </form>
        <form
          method='get'
          action='https://github.com/aarish790/newslettersignup'
        >
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button'
            >
              Github
            </button>
          </Zoom>
        </form>
        <PlaylistAddIcon color='primary' fontSize='large'></PlaylistAddIcon>
        <big>TODOLIST APP -</big> This app helps users to add their own items in
        a list and keep a record of it. This app is a both Front-End as well as
        Back-End app. Items addded to list are render on the screen as well as
        in my database which is present in mongoDB Atlas. {'     '}
        <form method='get' action='https://lit-garden-78642.herokuapp.com/'>
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button1'
            >
              Run App Now
            </button>
          </Zoom>
        </form>
        <form method='get' action='https://github.com/aarish790/todolist_v2'>
          <Zoom in={true}>
            <button
              variant='contained'
              color='primary'
              type='submit'
              className='button'
            >
              Github
            </button>
          </Zoom>
        </form>
      </p>
      <p className='o'>
        <big>
          <CreateIcon></CreateIcon>NOTE -
        </big>{' '}
        The projects without the Run App Now button can be cloned by the
        interested person from my github account,and can be run locally on their
        desktops and further they can deploy it.
      </p>
    </div>
  );
}
export default Project;
