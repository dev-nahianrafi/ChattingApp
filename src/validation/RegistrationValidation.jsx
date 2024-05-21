/* eslint-disable no-unused-vars */
import React from 'react'
import * as Yup from 'yup';


const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Registrationvalidation = Yup.object({
    name: Yup.string()
      .max(20, 'Must be 15 characters or less')
      .required('Required'),
    // lastName: Yup.string()
    //   .max(20, 'Must be 20 characters or less')
    //   .required('Required'),
    email: Yup.string()
          .email('Invalid email address')
          .matches(emailregex, 'Enter Your Right Email*')
          .required('Required*'),

    password: Yup.string()
            .max(15, 'Max 15')
            .min(8,'Enter At Least 8 Charecter')
            .required('Please Enter Your Password')
  })


export default Registrationvalidation