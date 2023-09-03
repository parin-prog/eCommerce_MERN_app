import React, { useEffect } from "react";
import "./topbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../redux/userRedux";
import { useNavigate } from "react-router-dom";

export default function Topbar() {

  const {currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!currentUser?.isAdmin){
      navigate("/login")
    }
  },[currentUser,navigate])

  const logoutHandle = ()=>{
    dispatch(logout());
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Cuts. admin panel</span>
        </div>
        <div className="topRight">
        {currentUser?.isAdmin===true && 
          <div className="topbarIconContainer" style={{ border: "1px solid gray", padding: "3px", marginBottom: "6px" }} onClick={logoutHandle}>
            Logout
          </div>}
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
