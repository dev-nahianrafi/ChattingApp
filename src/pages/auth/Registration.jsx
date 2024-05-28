/* eslint-disable no-unused-vars */
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
import { LiaEyeSolid } from "react-icons/lia";
import { useState } from 'react';
import { useFormik } from 'formik';
import Registrationvalidation from '../../validation/RegistrationValidation';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";


// meterial style start
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
  top: "10px",
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
// meterial style end


const Registration = () => {

  // function start

  let [show,setShow] = useState(true)
  let handleShow = () =>{
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  // show hide

  let [loading, setloading] = useState(false)
  // loading hook

  const navigate = useNavigate();

  const auth = getAuth();
  const db = getDatabase();
  // firebase


  const initialValuesreg = {
    email: '',
    name: '',
    password: ''
  }
  // formik


  const formik = useFormik({
    initialValues: initialValuesreg,
    validationSchema: Registrationvalidation,

    onSubmit: (values,actions) => {
      // console.log(values);
      setloading(true)
      actions.resetForm()
      createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                updateProfile(auth.currentUser, {
                  displayName: values.name, 
                  // photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                  // console.log(userCredential.user)
                  set(ref(db, 'users/' + userCredential.user.uid), {
                    displayName: userCredential.user.displayName,
                    email: userCredential.user.email,
                    profile_picture : userCredential.user.photoURL
                  }).then(()=>{
                    // console.log("done");
                      toast.success('Registration Success', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    setloading(false)  
                    navigate("/")
                  });                
                }).catch((error) => {
                  console.log("opps ! something is wrong");
                  setloading(false)
                });                
              });
          })
          .catch((error) => {
            console.log(error);
            setloading(false)
          });
      // alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <>
    {loading &&
      <div className='loading'>
      <ThreeDots
        visible={true}
        height="120"
        width="120"
        color="#fff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      </div>
    }
      <Box sx={{ flexGrow: 1 }}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
                  Get started with easily register
              </Headinglogin>
              <p style={{color: '#11175D', fontSize:"20px", opacity:"0.5", marginBottom:"40px"}}>Free register and you can enjoy it</p>

              <form action="#" onSubmit={formik.handleSubmit}>
                <div className="inputboxes">
                  <div>
                    <Inputbox 
                      variant="standard" 
                      placeholder="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                    <p style={{color: 'red', marginTop:"10px"}}>{formik.errors.email}</p>
                    ) : null}
                  </div>
                  <div>
                      <Inputbox 
                        variant="standard" 
                        placeholder="Full Name"
                        id="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                      {formik.touched.name && formik.errors.name ? (
                      <p style={{color: 'red', marginTop:"10px"}}>{formik.errors.name}</p>
                      ) : null}
                  </div>
                  {/* <div>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel 
                          value="female" 
                          control={<Radio />} 
                          label="Female" 
                          />
                          <FormControlLabel 
                          value="female" 
                          control={<Radio />} 
                          label="Female" 
                          />
                          <FormControlLabel 
                          value="female" 
                          control={<Radio />} 
                          label="Male" 
                          />
                        </RadioGroup>
                    </FormControl>
                  </div>*/}
                  <div className='hideshow'>
                    <Inputbox
                        variant="standard"
                        placeholder="Password"
                        type={show ? "password" : "text"}
                        autoComplete="current-password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password ? (
                      <p style={{color: 'red', marginTop:"10px"}}>{formik.errors.password}</p>
                      ) : null}
                    <Hide onClick={handleShow} />
                  </div>
                </div>
                <BootstrapButton type="submit" variant="contained" disableRipple>
                    Sign up
                </BootstrapButton>
              </form>
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
    </>

  )
}

export default Registration