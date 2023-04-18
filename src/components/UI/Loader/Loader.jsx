import React from "react";

import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.overlay}>
      <div></div>
    </div>
  );
}
