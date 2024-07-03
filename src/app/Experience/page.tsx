import React from "react";
import Main from "@/components/Main";
import Intro from "@/components/Intro";
import { experience } from "@/lib/Data";

const page = () => {
  return (
    <Main>
      <Intro />
      <div className="p-2 md:p-10 text-foreground">
        {experience.map((exp, i) => (
          <div className="py-2 px-10" key={i}>
            <div className="flex items-center gap-x-4">
              <h2>{exp.position}</h2>
              <span>----</span>
              <p>{exp.institute}</p>
            </div>

            <p className="font-light">{exp.duration}</p>
            <p className="font-light">{exp.description}</p>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default page;
