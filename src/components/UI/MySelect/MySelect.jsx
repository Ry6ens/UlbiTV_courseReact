import React from "react";

import s from "./MySelect.module.css";

export default function Select({ options, defaultValue, value, onChange }) {
  return (
    <select
      className={s.overlay}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
}
