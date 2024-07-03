"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="w-[25%] h-screen bg-background flex flex-col items-center gap-y-20  text-foreground border-l-[1px] border-r-[1px] border-slate-700/50">
      <div className="flex items-center gap-x-2">
        <h1 className="text-3xl font-semibold my-10 text-primary">John Doe</h1>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="ghost"
          size="sm">
          {theme === "dark" ? (
            <SunIcon className="text-slate-200" />
          ) : (
            <MoonIcon className="text-slate-500" />
          )}
        </Button>
      </div>

      <nav>
        <ul className=" flex flex-col  gap-y-10">
          <Link href={"/Experience"}>
            {" "}
            <li className="py-2 text-primary border-b-[1px] border-slate-500/50 hover:scale-105 transition-all ease-in">
              Experience
            </li>
          </Link>
          <Link href={"/Qualifications"}>
            {" "}
            <li className="py-2  text-primary border-b-[1px] border-slate-500/50 hover:scale-105 transition-all ease-in">
              Qualification
            </li>
          </Link>

          {/* <hr className="w-full text-slate-500/50 " /> */}
          <Link href={"/Achievements"}>
            {" "}
            <li className="py-2  text-primary border-b-[1px] border-slate-500/50 hover:scale-105 transition-all ease-in">
              Achievements
            </li>
          </Link>

          <Link href={"/Skills"}>
            {" "}
            <li className="py-  text-primary border-b-[1px] border-slate-500/50 hover:scale-105 transition-all ease-in">
              Skills
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
