import React from "react";

import s from "./MyModal.module.css";

export default function MyModal({ active, children, setModal }) {
  const rootClass = [s.modal];

  if (active) {
    rootClass.push(s.active);
  }

  return (
    <div className={rootClass.join(" ")} onClick={() => setModal(false)}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
