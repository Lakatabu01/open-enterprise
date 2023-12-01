import Image from "next/image";
import Header from "./ui/header";
import Intro from "./ui/intro";
import ReImagine from "./ui/reimagine";

export default function Home() {
  return (
    <main className="w-full items-center">
      <Header />
      <Intro />
      <ReImagine />
    </main>
  );
}
