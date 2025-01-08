"use client";
import { ThemeContext } from "@/store/themeStore";
import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function DarkModeToggler() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return isDarkMode ? (
    <MdLightMode onClick={toggleTheme} />
  ) : (
    <MdDarkMode onClick={toggleTheme} />
  );
}

export default DarkModeToggler;
