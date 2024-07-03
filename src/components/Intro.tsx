import React from "react";
import Image from "next/image";
import dp from "/public/dp.jpg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

const Intro = () => {
  return (
    <>
      <div className="w-full  flex flex-col items-center md:flex-row md:items-center  justify-center py-8 ">
        <div className="w-[8rem] h-[8rem] rounded-full bg-purple-500">
          <Image
            className="rounded-full"
            src={dp}
            width={128}
            height={128}
            alt="image"
          />
        </div>
        <div className="w-full md:w-2/3 p-2 md:p-4">
          <h1 className="text-2xl font-medium text-foreground">John Doe</h1>
          <p className="font-light text-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            magni.
          </p>
          <div className="mt-4 flex items-center gap-x-4">
            <GitHubLogoIcon className="w-5 h-5" />
            <TwitterLogoIcon className="w-5 h-5" />
            <EnvelopeClosedIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
      <hr className="w-[80%] mx-auto border-slate-500/50 border-px" />
    </>
  );
};

export default Intro;
