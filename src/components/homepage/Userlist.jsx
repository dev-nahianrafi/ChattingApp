// import React from 'react'
import Homepageheading from '../../utilities/Homepageheading'
import Threedoticon from '../../utilities/Threedoticon'
import './homepage.css'

const Userlist = () => {
  return (
    <div className="userlistMain">
        <div className="icon_and_heading">
            <Homepageheading text="User List"/>
            <Threedoticon/>
        </div>
        <div className="userlist_inner">
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
            <div className="userlist_item"></div>
        </div>
    </div>
  )
}

export default Userlist