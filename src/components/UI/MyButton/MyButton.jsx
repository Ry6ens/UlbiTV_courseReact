import React from "react";

import s from "./MyButton.module.css";

export default function MyButton({ className = "btn", onClick, children }) {
  return (
    <button className={s[className]} onClick={onClick}>
      {children}
    </button>
  );
}
