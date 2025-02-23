import React, { useState } from "react";

const InputField = ({
  label,
  id,
  type,
  value,
  name,
  onChange,
  required,
  placeHolder,
  icon,
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
        className={`left-4 text-[14px] transition-all text-[#344054] pointer-events-none`}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={`w-full px-3 py-2 border-[2px] flex justify-between items-center rounded-[5.7px] ${
          isFocused ? "border-secondary " : "border-[#D0D5DD] "
        }`}
      >
        <input
          {...rest}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          className="outline-none w-full placeholder:text-[13.5px] font-normal"
        />
        {icon}
      </div>
    </div>
  );
};

export default InputField;
