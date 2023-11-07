import Arena from "@/components/Arena";
import CardsList from "@/components/CardsList";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex relative">
      <CardsList></CardsList>
      <div
        className="bg-zinc-200/10 h-[100vh] fixed
      right-0 bottom-0 w-96 ml-96 
    "
      >
        <div>
          <h1>Barra de pesquisa</h1>
        </div>
        <Arena></Arena>
      </div>
    </main>
  );
}
