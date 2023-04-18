import React, { useState } from "react";

import s from "./Form.module.css";
import MyInput from "../UI/MyInput/MyInput";
import Button from "../UI/MyButton/MyButton";

export default function Form({ addPost }) {
  const [post, setPost] = useState({ title: "", descr: "" });

  function inputChangeHandler(e) {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();

    addPost({ ...post, id: new Date() });

    setPost({ title: "", descr: "" });
  }

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <MyInput
        type="text"
        name="title"
        value={post.title}
        onChange={(e) => inputChangeHandler(e)}
      />
      <MyInput
        type="text"
        name="descr"
        value={post.descr}
        onChange={(e) => inputChangeHandler(e)}
      />
      <Button type="submit">Add post</Button>
    </form>
  );
}
