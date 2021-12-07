import React from 'react';
import Container from '@material-ui/core/Container';

import './Services.css';
function Services(){
  return(
    <React.Fragment>
      <Container maxWidth="sm" className="form_block">
        <h3>Services</h3>
        <h4>We are providing below services</h4>
        <ul className="ul-items">
          <li>Adventure.Travel is the go-to source for information on adventure travel that prioritizes sustainability, 
            serves as a force for good, and transforms people and places. 
          </li>
          <li>Adventure.Travel is the go-to source for information on adventure travel that prioritizes sustainability, 
            serves as a force for good, and transforms people and places. 
          </li>
          <li>Adventure.Travel is the go-to source for information on adventure travel that prioritizes sustainability, 
            serves as a force for good, and transforms people and places. 
          </li>
          <li>Adventure.Travel is the go-to source for information on adventure travel that prioritizes sustainability, 
            serves as a force for good, and transforms people and places. 
          </li>
        </ul>
      </Container>
    </React.Fragment>
  )
}
export default Services;