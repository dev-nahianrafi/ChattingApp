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
import { LiaEyeSolid } from "react-icons/lia";
import { useState } from 'react';
import { useFormik } from 'formik';
import loginvalidation from '../../validation/Loginvalidation';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let initialvalues = {
    email: '',
    password: '',
  }

  

const auth = getAuth();

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: loginvalidation,
    onSubmit: (values, actions) => {
      // console.log(values);
      actions.resetForm()
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            console.log(values);
            console.log(userCredential);

          })
          .catch((error) => {
            console.log(error);
            // const errorCode = error.code;
            // const errorMessage = error.message;
          });
        // alert(JSON.stringify(values, null, 2));
      },
  });

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
              <form action="#" onSubmit={formik.handleSubmit}>
                <div className="inputboxes">
                    <div>
                        <Inputbox
                          variant="standard" 
                          placeholder="Email Address"
                          id="email"
                          name="email"
                          type="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? (
                        <p style={{color: 'red', margin:"15px 0"}}>{formik.errors.email}</p>
                        ) : null}
                    </div>
                    <div>
                      <Inputbox
                          variant="standard"
                          placeholder="Password"
                          type={show ? "password" : "text"}
                          autoComplete="current-password"
                          id="password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <p style={{color: 'red', margin:"15px 0"}}>{formik.errors.password}</p>
                        ) : null}
                    </div>
                    <Hide onClick={handleShow} />
                </div>
                <BootstrapButton type='submit' variant="contained" disableRipple>
                  Login to Continue
                </BootstrapButton>
              </form>
              <span style={{color:"#03014C", fontSize:"14px",}}>Don’t have an account ? <a href="/registration" style={{color:"#EA6C00"}}>Sign up</a></span>
              <p onClick={handleOpen} style={{color: 'blue', marginTop: '10px', cursor: 'pointer'}}>Forget Password?</p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{width: "100%", height: "100vh"}}>
            <Images source={logobanner} ault="not found" styling="bannerc"/>
          </div>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h3 style={{marginBottom: '15px'}}>Enter Your Email</h3>
            <div>
              <Inputbox
                variant="standard" 
                placeholder="Email Address"
                id="forgetemail"
                name="forgetemail"
                type="email"
              />
              <BootstrapButton type='submit' variant="contained" disableRipple>
                    forget password
              </BootstrapButton>      
            </div>
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export default Login