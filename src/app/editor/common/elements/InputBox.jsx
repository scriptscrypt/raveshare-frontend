import { Input } from "@material-tailwind/react";
import React from "react";

const InputBox = ({ label, value, onChange, placeholder, className, name, onFocus }) => {
  return (
    <Input
      type="text"
      className={className}
      label={label}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
      name={name}
      placeholder={placeholder}
      containerProps={{ className: "min-w-[100px]" }}
    />
  );
};

export default InputBox;
