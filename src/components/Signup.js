import React from "react";
import './Signup.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
     root: {
       '& > *': {
         margin: theme.spacing(1),
         width: '50ch',
         margin:25,
        
       },
     },
   }));

function Signup(){
          const classes = useStyles();

     return (
        <React.Fragment>
             
            <CssBaseline />
               <Container maxWidth="sm" className="form_block">
                   <h1 className="signup_heading">SIGN UP</h1>
                   <h3 >Already a member ? <a href="" className="Log_in"> Log in</a></h3>
                    <form className={classes.root} noValidate autoComplete="off" 
                       style={{marginLeft:"60px"}} 
                    >
                         <TextField 
                              id="standard-basic" 
                              label="Enter Email" 
                              
                         />
                          {/* <i class="fa fa-envelope" aria-hidden="true"></i> */}
                         <TextField
                              id="standard-password-input"
                              label="Enter Password"
                              type="password"
                              autoComplete="current-password"
                         />
                         <Button variant="contained" color="primary" className="signup_btn">
                             SIGN UP
                         </Button>
                    </form>
               </Container>
               
      </React.Fragment>
     )
}
export default Signup;