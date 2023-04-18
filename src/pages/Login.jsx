import React, { useContext, useState } from "react";

import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import { AuthContext } from "../context";

export default function LoginPage() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState({ login: "", password: "" });

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");

    setFormData({ login: "", password: "" });
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "50px auto 0px",
      }}
    >
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          marginTop: "50px",
        }}
        onSubmit={handleSubmit}
      >
        <MyInput placeholder="Enter login" onChange={handleChange} />
        <MyInput placeholder="Enter password" onChange={handleChange} />
        <MyButton>Enter</MyButton>
      </form>
    </section>
  );
}
