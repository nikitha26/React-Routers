import React from 'react';
import './About.css';
import Container from '@material-ui/core/Container';

function About(){
  return(
    <React.Fragment>
      <Container maxWidth="sm" className="form_block">
        <h2>ABOUT US</h2>
        <h4>Adventure.Travel finds the best adventure companies and stories for you 
          to constantly remain equipped and inspired to travel the world. We are the voice
          of travel businesses committed to long-term, sustainable growth of adventure travel around the globe. These businesses are members of the Adventure Travel Trade Association and are committed to values that drive a necessary movement to change travel so that it benefits the 
          businesses, the people and the environment of the places we travel.</h4>
          <br/> <br/>
        <h3>What is Adventure Travel?</h3>
        <p>Adventure.Travel is the go-to source for information on adventure travel that prioritizes sustainability, serves as a force for good, and transforms people and places. From research and trends to best travel practices, ideal gear, and destinations and operators with outstanding commitments to responsible travel, 
          we have everything you need to make sure your adventures align with your values.</p>
      </Container>
    </React.Fragment>
  )
}
export default About;