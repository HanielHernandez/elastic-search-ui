import React from "react";

export const CustomSorting = ({ onChange, options, value, label }) => (
  <div className="my-4">
    <span className= "text-sm font-medium text-neutral-600">{label}</span>
  <select
    className="border outline-none focus:border-blue-600 px-4 py-2 my-2"
    onChange={(event) => {onChange(event.target.value)}}
    value={value}
  >
    {options.map((option, i) => (
      <option key={"sortiong-option" + i} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
  </div>
);
