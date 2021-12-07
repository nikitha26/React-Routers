import { Button } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import TextField from '@material-ui/core/TextField';
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
               {/* <p className="footer-subscription-heading">
                   Join the Adventure newsletter to receive our best vacation deals
               </p>
               <p className="footer-subscription-text">
                   You can unsubscribe at any time
               </p> */}
                <div className="input-areas">
                    <form>
                    <h3 >Join Us Adventuring</h3>
                        <TextField 
                                id="standard-basic" 
                                label="Submit Your Email"           
                        /><br/><br/>
                        <Button variant="contained" color="primary" className="signup_btn">
                            SubScribe
                        </Button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Footer
