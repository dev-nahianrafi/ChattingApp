import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import "./Auth.css"
import Inputbox from '../../utilities/Inputbox';
import Button from '@mui/material/Button';
import Images from '../../utilities/Images';
import logobanner from '../../assets/images/chatban.jpg'
import TextField from '@mui/material/TextField';
import { LiaEyeSolid } from "react-icons/lia";
import { useState } from 'react';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Headinglogin = styled(Typography)({
  color: '#03014C',
  fontSize: "33px",
  fontWeight: "700",
  lineHeight: "normal",
  marginBottom: "30px",
});

const Glogo = styled(FcGoogle)({
  fontSize: "33px",
});
const Hide = styled(LiaEyeSolid)({
  fontSize: "25px",
  position: "absolute",
  top: "97px",
  right: "4px",
  cursor: "pointer"
})

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '26px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#5F34F5',
  borderColor: '#0063cc',
  width:"100%",
  marginTop: "50px",
  marginBottom: "35px"
});

const Login = () => {

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
                  Login to your account!
              </Headinglogin>

              <div className='logomain'>
                <Glogo />
                <a href="#" className='googleic'>Login with Google</a>
              </div>
              <div className="inputboxes">
                  <Inputbox variant="standard" placeholder="Email Address"/>
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
                 Login to Continue
              </BootstrapButton>
              <span style={{color:"#03014C", fontSize:"14px"}}>Don’t have an account ? <a href="/registration" style={{color:"#EA6C00"}}>Sign up</a></span>
          </div>

        </Grid>
        <Grid item xs={6}>
          <div style={{width: "100%", height: "100vh"}}>
            <Images source={logobanner} ault="not found" styling="bannerc"/>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login