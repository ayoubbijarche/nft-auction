import Image from "next/image";
import { Hero } from "./components/hero";
import { Header } from "./components/header";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
    </div>
  );
}
