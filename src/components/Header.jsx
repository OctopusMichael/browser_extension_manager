import React from "react";
import { useDarkMode } from "../assets/hooks/useDarkMode";

const Header = () => {
  const { isDark, toggle } = useDarkMode();
  return (
    <div className=" bg-neutral-0 dark:bg-neutral-800 rounded-3xl flex justify-between items-center p-5">
      {isDark ? (
        <img src="images/logo-light.svg" alt="logo-dark" />
      ) : (
        <img src="images/logo.svg" alt="logo-light" />
      )}
      <button
        className="p-4  rounded-2xl bg-neutral-100 dark:bg-neutral-700 "
        onClick={toggle}
      >
        {" "}
        {isDark ? (
          <img src="images/icon-sun.svg" alt="icon-ligh-mode"></img>
        ) : (
          <img src="images/icon-moon.svg" alt="icon-dark-mode" />
        )}{" "}
      </button>
    </div>
  );
};

export default Header;
