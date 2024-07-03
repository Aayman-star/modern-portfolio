import React, { FC, ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const Main = ({ children }: Props) => {
  return (
    <main className="w-[80%] h-[100vh]  bg-background border-r-[1px] border-muted-foreground">
      {children}
    </main>
  );
};

export default Main;
