import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PostItem from "../PostItem/PostItem";

import s from "./PostsList.module.css";

export default function Posts({ posts, deletePost }) {
  return (
    <ul className={s.list}>
      <TransitionGroup className="todo-list">
        {posts.length ? (
          posts.map((item) => (
            <CSSTransition key={item.id} timeout={500} classNames="post">
              <PostItem key={item.id} item={item} deletePost={deletePost} />
            </CSSTransition>
          ))
        ) : (
          <>Post not found!</>
        )}
      </TransitionGroup>
    </ul>
  );
}
