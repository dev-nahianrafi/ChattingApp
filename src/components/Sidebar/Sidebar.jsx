/* eslint-disable no-unused-vars */
import { styled } from "@mui/material";
import "./sidebar.css"
import Avatar from '@mui/material/Avatar';
import { LuLogOut } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import {useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logedinUser } from "../../slices/authSlice";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect } from "react";

const Logout = styled(LuLogOut)({
  fontSize: "46px",
  color: "#fff"
})

const Sidebar = () => {

  const auth = getAuth();
  const navigate = useNavigate();
  const data = useSelector((state) => state.logedinUserData.value)
  const dispatch = useDispatch()

  // console.log(data);
  // useEffect(()=>{
  //   if(data){
  //     console.log("login first");
  //   }else{
  //     navigate("/")
  //   }
  // },[])

  const handlelogOut = () =>{
    signOut(auth).then(() => {
      localStorage.removeItem("loggedinUser")
      dispatch(logedinUser(null))
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }


  return (
    <div className="sidebar_main">
      <div className="sidebar_inner">
        <div className="sidebarProfile">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 85, height: 85 }}
            />
           
          <p style={{textAlign:"center", padding: "0px 0px", fontSize: "20px", fontWeight: "400", color: "#fff"}}>            
            {data ?
              data.displayName
            :
              <Skeleton style={{width: "110%", height: "30px", margin: "0 auto"}}/>
            }
            {/* {data?.displayName} */}
          </p>
        </div>
        <div className="sidebarItem">
            <ul>
              <li>
                <NavLink to="/home">
                  <IoHomeOutline />
                </NavLink>
              </li>
              <li>
                <NavLink to="/message">
                  <AiOutlineMessage />
                </NavLink>
              </li>
              <li>
                <NavLink to="/notification">
                  <FaRegBell />
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings">
                  <IoSettingsOutline />
                </NavLink>
              </li>
            </ul>
        </div>
        <div className="sidebarLogout">
          <Logout onClick={handlelogOut} style={{cursor: 'pointer'}}/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar