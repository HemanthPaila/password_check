import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [valid, isValid] = useState(true);
  const [valid1, isValid1] = useState(true);
  const [valid2, isValid2] = useState(true);
  const [valid3, isValid3] = useState(true);
  const [valid4, isValid4] = useState(true);
  const clickHandler = (event) => {
    isValid(true);
    isValid1(true);
    isValid2(true);
    isValid3(true);
    isValid4(true);
    const name = event.target.value;
    for (var i = 0; i < name.length; i++) {
      if (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) {
        isValid(false);
      }
      if (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) {
        isValid1(false);
      }
      if (name.length >= 8) {
        isValid2(false);
      }
      if (
        name.charAt(i) === "!" ||
        name.charAt(i) === "@" ||
        name.charAt(i) === "#" ||
        name.charAt(i) === "$" ||
        name.charAt(i) === "%" ||
        name.charAt(i) === "^" ||
        name.charAt(i) === "&" ||
        name.charAt(i) === "*"
      ) {
        isValid3(false);
      }
      if (Number(name[i]) > 0) {
        isValid4(false);
      }
    }
  };
  return (
    <div>
      <input type="text" placeholder="Enter password" onChange={clickHandler} />
      <li style={{ display: !valid2 ? "none" : "block" }}>
        password contains 8 characters
      </li>
      <li style={{ display: !valid1 ? "none" : "block" }}>
        password should contain atleast one uppercase letter
      </li>
      <li style={{ display: !valid ? "none" : "block" }}>
        password should contain atleast one lowercase letter
      </li>
      <li style={{ display: !valid4 ? "none" : "block" }}>
        password should contain atleast on number
      </li>
      <li style={{ display: !valid3 ? "none" : "block" }}>
        password should contain atleast one special character
      </li>
      <li style={{ display: !valid3 ? "none" : "block" }}>
        special characters like: !, @, #, $, %, ^, &, *
      </li>
    </div>
  );
};
export default Form;
