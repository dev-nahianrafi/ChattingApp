/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Login from '../../pages/auth/Login';


export const IsLogedin = () => {

    const data = useSelector((state) => state.logedinUserData.value)

  return data ? <Outlet/> : <Login/>
}

export default IsLogedin
