import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';
import './Welcome.css';


function Welcome() {
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

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
        <button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={console.log('hey')}
          style = {{
            backgroundColor: isHover ? "#FFF" : "transparent",
            color: isHover ? "#242424" : "#FFF",
            padding: "8px 20px",
            border: "1px solid var(--primary)",
            transition: "all 0.35s ease-out"
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          THIS IS US <i className='far fa-play-circle' />
        </button>
      </div>
    </div>
  )
}

export default Welcome