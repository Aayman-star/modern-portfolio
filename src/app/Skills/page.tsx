import React from "react";
import Intro from "@/components/Intro";
import Main from "@/components/Main";
import { skills } from "@/lib/Data";
import { link } from "fs";
const page = () => {
  return (
    <Main>
      <Intro />
      <div className="p-10 text-foreground">
        <ul className="list-disc px-10">
          {skills.map((skill, id) => (
            <li className="px-2 py-2  font-light" key={id}>
              {skill.title}
            </li>
          ))}
        </ul>
      </div>
    </Main>
  );
};

export default page;
