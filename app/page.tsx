import PlaySVG from "@/assets/play.svg";
import Counter from "@/components/Counter";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-gray-950 grid place-items-center">
      <div className="w-full max-w-sm bg-white rounded overflow-hidden p-4 flex justify-between">
        <div className="flex gap-1">
          <Counter />
        </div>

        <div>
          <button className="bg-indigo-500 p-2 px-4 text-white flex gap-2 justify-center">
            <Image 
              src={PlaySVG.src}
              width={10}
              height={10}
              alt="Start"
            />
            <span>Begin Timer</span>
          </button>
        </div>
      </div>
    </main>
  );
}