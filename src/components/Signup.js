import React from "react";
import './Signup.css';
import Button from '@material-ui/core/Button';

function Signup(){
     return (
         <div className="form_div">
             <h2>SignUp</h2>
             
                  <form>
                    <Button variant="contained" color="primary">
                            SIGNUP
                    </Button>
                  </form>
         </div>    
     )
}
export default Signup;