// import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import "./Auth.css"
import Inputbox from '../../utilities/Inputbox';
import Button from '@mui/material/Button';
import Images from '../../utilities/Images';
import welcomeban from '../../assets/images/welcom.jpg'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { LiaEyeSolid } from "react-icons/lia";
import { useState } from 'react';


const Headinglogin = styled(Typography)({
  color: '#03014C',
  fontSize: "33px",
  fontWeight: "700",
  lineHeight: "normal",
  marginBottom: "12px",
});

const Hide = styled(LiaEyeSolid)({
  fontSize: "20px",
  position: "absolute",
  top: "278px",
  right: "8px",
  cursor: "pointer"
})

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '26px 12px',
  borderRadius: "60px",
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#5F34F5',
  borderColor: '#0063cc',
  width:"100%",
  marginTop: "50px",
  marginBottom: "35px"
});


const Registration = () => {

  let [show,setShow] = useState(true)

  let handleShow = () =>{
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div>
              <Headinglogin variant="h4">
                  Get started with easily register
              </Headinglogin>
              <p style={{color: '#11175D', fontSize:"20px", opacity:"0.5", marginBottom:"40px"}}>Free register and you can enjoy it</p>

              <div className="inputboxes">
                  <Inputbox variant="standard" placeholder="Email Address"/>
                  <Inputbox variant="standard" placeholder="Full Name"/>
                  <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                      </RadioGroup>
                 </FormControl>
                  
                 <TextField
                    id="standard-password-input"
                    label="Password"
                    type={show ? "password" : "text"}
                    autoComplete="current-password"
                    variant="standard"
                  />
                  <Hide onClick={handleShow} />
              </div>
              <BootstrapButton variant="contained" disableRipple>
                  Sign up
              </BootstrapButton>
              <span style={{color:"#03014C", fontSize:"14px"}}>Already  have an account ?  <a href="/" style={{color:"#EA6C00"}}>Log In</a></span>
          </div>

        </Grid>
        <Grid item xs={6}>
          <div style={{width: "100%", height: "100vh"}}>
            <Images source={welcomeban} ault="not found" styling="bannerc"/>
          </div>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Registration