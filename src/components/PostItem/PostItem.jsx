import React from "react";
import { Link } from "react-router-dom";

import Button from "../UI/MyButton/MyButton";

import s from "./PostItem.module.css";

export default function PostItem({ item, deletePost }) {
  return (
    <li className={s.item}>
      <div>
        <h1>
          {item.id}. {item.title}
        </h1>
        <p>{item.body}</p>
      </div>
      <Link to={`/posts/${item.id}`}>Open</Link>
      <Button onClick={() => deletePost(item)}>DELETE</Button>
    </li>
  );
}
