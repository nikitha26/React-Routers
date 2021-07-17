import React from "react";
import './Signup.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
function Signup(){
     return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc',height:100,}} >
                <h1>SIGN UP</h1>
                 </Typography>  
            </Container>
      </React.Fragment>
     )
}
export default Signup;