import React from "react";

export default function Header({ setDarkMode, darkMode }) {
  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header>
      <h1>Note App </h1>
      <i className="fa-solid fa-moon trah" onClick={darkModeHandler}></i>
    </header>
  );
}
