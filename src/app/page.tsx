import Image from "next/image";
import Intro from "@/components/Intro";
import Main from "@/components/Main";

export default function Home() {
  return (
    <Main>
      <Intro />
      <div className="p-24">This is main</div>
    </Main>
  );
}
