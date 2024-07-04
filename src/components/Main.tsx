"use client";
import React, { FC, ReactNode } from "react";
import { useTheme } from "next-themes";
type Props = {
  children: ReactNode;
};
const Main = ({ children }: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <main
      className={`w-full md:w-[80%] h-[100vh]  bg-background border-r-[1px] ${
        theme === "dark" ? "border-muted" : "border-slate-700/50"
      }`}>
      {children}
    </main>
  );
};

export default Main;
