import React, { useState } from "react";

const SelectField = ({
  label,
  id,
  type,
  value,
  name,
  onChange,
  required,
  placeHolder,
  options,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setIsValid(e.target.value !== "");
    // Example validation logic, you can adjust as needed
  };
  return (
    <div className="relative flex flex-col gap-1">
      <label
        className={`left-4 text-[14px] text-[#344054] transition-all pointer-events-none`}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={`w-full px-3 py-2 border-[2px] flex justify-between items-center rounded-[5.7px] ${
          isFocused ? "border-secondary " : "border-[#D0D5DD] "
        }`}
      >
        <select
          {...rest}
          name=""
          id={id}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          className="outline-none w-full text-[13.6px] font-normal text-text_secondary"
        >
          <option value="">
            {placeHolder || "Select"}
          </option>
          {options?.map((item, index) => (
            <option
              value={item.value}
              key={index}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
