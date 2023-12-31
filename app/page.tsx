import Image from "next/image";
import Header from "./ui/header";
import Intro from "./ui/intro";
import ReImagine from "./ui/reimagine";
import Kickstart from "./ui/kickstart";
import Onboard from "./ui/onboard";
import Engage from "./ui/engage";
import Improve from "./ui/improve";
import Repeat from "./ui/repeat";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <main className="w-full items-center">
      <Header />
      <Intro />
      <ReImagine />
      <Kickstart />
      <Onboard />
      <Engage />
      <Improve />
      <Repeat />
      <Footer />
    </main>
  );
}
