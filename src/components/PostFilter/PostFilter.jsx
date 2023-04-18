import React from "react";

import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

import s from "./PostFilter.module.css";

const options = [
  {
    name: "Sort by title",
    value: "title",
  },
  {
    name: "Sort by description",
    value: "body",
  },
];

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className={s.overlay}>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        type="text"
        placeholder="Type search title"
      />
      <MySelect
        value={filter.sort}
        options={options}
        defaultValue={"Sort by:"}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
}
