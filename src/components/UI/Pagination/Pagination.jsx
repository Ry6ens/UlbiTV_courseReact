import React from "react";

import { getPagesArray } from "../../../utils/pages";

import MyButton from "../MyButton/MyButton";

import s from "./Pagination.module.css";

export default function Pagination({ totalPages, page, changePage }) {
  const pagesArray = getPagesArray(totalPages);

  return (
    <ul className={s.list}>
      {pagesArray.map((item) => (
        <li key={item}>
          <MyButton
            className={page === item ? "btnPages_current" : "btnPages"}
            onClick={() => changePage(item)}
          >
            {item}
          </MyButton>
        </li>
      ))}
    </ul>
  );
}
