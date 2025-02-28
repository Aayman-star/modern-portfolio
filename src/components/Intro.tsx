"use client";
import React from "react";
import Image from "next/image";
import dp from "/public/dp.jpg";
import { useTheme } from "next-themes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { navLinks } from "@/lib/Data";

const Intro = () => {
  /*Test comment*/
  /**This is where the theme is mentioned */
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-between">
      <header className="w-full  h-10  fixed top-4">
        <nav className="w-[80%] md:w-[35%] mx-auto h-full bg-muted rounded-md">
          <ul className="w-[75%] md:w-[85%] h-full mx-auto flex items-center justify-between">
            {navLinks.map((item, i) => (
              <li key={i}>
                <Link className="hidden md:block" href={item.link}>
                  {item.name}
                </Link>
                <Link href={item.link}>
                  <item.linkIcon className="w-6 h-6 md:hidden" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="w-full  flex flex-col items-center md:flex-row md:items-center  justify-center px-4 py-8 mt-10">
        <div className="w-[8rem] h-[8rem] rounded-full">
          <Image
            className="rounded-full"
            src={dp}
            width={128}
            height={128}
            alt="image"
          />
        </div>
        <div className="w-full md:w-2/3 p-10 md:p-4">
          <div className="flex items-center justify-between mb-2">
            <h1
              className={`text-2xl font-medium ${
                theme === "dark" ? "text-foreground" : "text-muted-foreground"
              }`}>
              John Doe
            </h1>
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="sm">
              {theme === "dark" ? (
                <SunIcon className="text-foreground" />
              ) : (
                <MoonIcon className="text-foreground" />
              )}
            </Button>
          </div>

          <p
            className={`font-light ${
              theme === "dark" ? "text-foreground" : "text-muted-foreground"
            }`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            magni.
          </p>
          <div className="mt-4 flex items-center gap-x-4">
            <GitHubLogoIcon
              className={`w-5 h-5 ${
                theme === "dark" ? "text-foreground" : "text-muted-foreground"
              }`}
            />
            <TwitterLogoIcon className="w-5 h-5" />
            <EnvelopeClosedIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
      <hr className="w-[80%] mx-auto border-slate-500/50 border-px" />
    </div>
  );
};

export default Intro;
