import React from "react";
import Main from "@/components/Main";
import Intro from "@/components/Intro";
import { achievements } from "@/lib/Data";

const page = () => {
  return (
    <Main>
      <Intro />
      <div className="p-10 text-foreground">
        {achievements.map((ach, i) => (
          <ul className="list-disc font-light px-10" key={i}>
            <li className="mb-2">{ach.title}</li>
          </ul>
        ))}
      </div>
    </Main>
  );
};

export default page;
