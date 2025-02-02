"use client";

import { Moon, Sun } from "lucide-react";
// components/ThemeToggle.js
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleDarkMode = () => {
    setIsSpinning(!isSpinning);

    setIsDarkMode(!isDarkMode);

    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <Sun
          className={`cursor-pointer text-gray-500 size-7  ${isSpinning ? "animate-spin" : ""}`}
        />
      ) : (
        <Moon
          className={`cursor-pointer text-gray-500 size-7  ${isSpinning ? "animate-spin" : ""}`}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
