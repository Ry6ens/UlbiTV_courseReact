import React, { useContext } from "react";
import { Link } from "react-router-dom";

import MyButton from "../MyButton/MyButton";

import { AuthContext } from "../../../context";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleLogOut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth", "false");
  };

  return (
    <div className="navbar">
      <div className="navbar_links">
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </div>
      {isAuth ? <MyButton onClick={handleLogOut}>Log Out</MyButton> : <></>}
    </div>
  );
}
