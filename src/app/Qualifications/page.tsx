import React from "react";
import Main from "@/components/Main";
import Intro from "@/components/Intro";
import { qualification } from "@/lib/Data";

const page = () => {
  return (
    <Main>
      <Intro />
      <div className="p-10 text-foreground">
        {qualification.map((q, i) => (
          <div className="mb-2 px-8" key={i}>
            <div className="flex items-center gap-x-4">
              <h2>{q.degree}</h2>
              <span>----</span>
              <p>{q.institute}</p>
            </div>

            <p>{q.duration}</p>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default page;
