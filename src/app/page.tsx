import Image from "next/image";
import Intro from "@/components/Intro";
import Main from "@/components/Main";

export default function Home() {
  return (
    <Main>
      <Intro />
      <div className="p-24">
        <p>
          This is a simple portfolio for a professional of the modern day. Built
          with nextjs to give you excellent speed and easily customisable.
        </p>
      </div>
    </Main>
  );
}
