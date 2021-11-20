import React, { useLayoutEffect, useRef, useState } from "react";

import styles from "./TextField.module.css";

function TextField({
  value = "",
  onChange = () => {},
  type = "text",
  placeholder = "Search...",
  css = {},
  id = "",
  onKeyPress,
  isFocus,
  ...rest
}) {
  const [inpvalue, setValue] = useState(value);
  const inputRef = useRef("");

  useLayoutEffect(() => {
    if (isFocus) {
      inputRef.current.focus();
    }
  }, [isFocus]);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <input
      type={type}
      value={inpvalue}
      onChange={handleChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      id={id}
      className={styles.input}
      style={css}
      ref={inputRef}
      {...rest}
    />
  );
}

export default TextField;
