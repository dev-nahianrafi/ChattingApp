/* eslint-disable no-unused-vars */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';





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
  fontSize: "20px",
  position: "absolute",
  top: "10px",
  right: "8px",
  cursor: "pointer"
})

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '20px 12px',
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
  const navigate = useNavigate();
  const [loder,setloder] = useState(false)
  const [forgetpass, setforgetpass] = useState("")
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  

  // forget pass oparation stat
  let handleforgetpss = () =>{
    if(!forgetpass){
      console.log("type something");
    }else{
      sendPasswordResetEmail(auth, forgetpass)
      .then(() => {
        toast.success('Email Send', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        Navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(error);
      });
    }
  }
  // forget pass end

  // log in with email
  let handlegooglelogin = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(result);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }
  // log in with email


  // forget oparation start
  let initialvalues = {
    email: '',
    password: '',
  }
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: loginvalidation,
    onSubmit: (values, actions) => {
      // console.log(values);
      setloder(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user
            if(user.emailVerified){
              toast.success('Login Success', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              console.log(user);
              setInterval(()=>{
                localStorage.setItem("loggedInUser", user)
                navigate("/home")
              },2000);

              setloder(false)
            }else{
              toast.error('Please Verify Your Email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              setloder(false)
              actions.resetForm()
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error('Checked Your Id Or Password...!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            setloder(false)
          });
        // alert(JSON.stringify(values, null, 2));
      },
  });
  // forget oparation end

  // hide show oparation start
  let [show,setShow] = useState(true)
  let handleShow = () =>{
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  // hide show oparation end
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Grid container>
        <Grid item xs={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div>
              <Headinglogin variant="h4">
                  Login to your account!
              </Headinglogin>

              <div onClick={handlegooglelogin} className='logomain'>
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
                    <div className='hideshowtwo'>
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
                    <Hide onClick={handleShow} />
                    </div>
                </div>
                <BootstrapButton disabled={loder} type='submit' variant="contained" disableRipple>
                  {loder ?
                    <ThreeDots
                    visible={true}
                    height="40"
                    width="40"
                    color="#fff"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                    :
                    "Login to Continue"
                  }                 
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
              <form action="#">
                <Inputbox
                  variant="standard" 
                  placeholder="Email Address"
                  id="forgetemail"
                  name="forgetemail"
                  type="email"
                  onChange={(e)=>{setforgetpass(e.target.value)}}
                />
                <BootstrapButton onClick={handleforgetpss} style={{padding:"14px 12px"}} type='submit' variant="contained" disableRipple>
                      forget password
                </BootstrapButton>
              </form>      
            </div>
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export default Login