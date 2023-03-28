import React from 'react';
import './App.css';
import { Button } from './Button';
import './Welcome.css';

function Welcome() {
  return (
    <div className='welcome'>
      <video src='https://player.vimeo.com/external/376190181.hd.mp4?s=a876bdfcae5cfde541d89b32237f28be9ff725cf&profile_id=174&oauth2_token_id=57447761' autoPlay loop muted />
      <h1>ORDER NOW</h1>
      <p>Everything you Need is Here</p>
      <div className='welcome-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          THIS IS US <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default Welcome