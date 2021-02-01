import React from "react";
import "../CSS/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from ".//HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Notifications from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          {/* {searchicon} */}
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Message" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="logout" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
