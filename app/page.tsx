"use client";

import Image from "next/image";
import { useState } from "react";

import PlaySVG from "@/assets/play.svg";
import PauseSVG from "@/assets/pause.svg";
import Counter from "@/components/Counter";
import CounterOptions from "@/components/CounterOptions";

export default function HomePage() {
  const [playingTimer, setPlayingTimer] = useState<boolean>(false);

  const toggleTimerState = () =>
    setPlayingTimer((isPlayingTimer: boolean) => !isPlayingTimer);

  return (
    <main className="w-screen h-screen overflow-hidden bg-gray-950 grid place-items-center">
      <div className={`w-full max-w-sm bg-white rounded overflow-hidden p-4 flex ${playingTimer ? "flex-col gap-10 p-6" : "justify-between"}`}>
        <div className={playingTimer ? "w-full" : "hidden"}>
          <Counter />
        </div>

        <div className={`flex gap-1 ${playingTimer && "hidden"}`}>
          <CounterOptions />
        </div>

        <div className={playingTimer ? "w-full" : ""}>
          <button
            onClick={toggleTimerState}
            className={`bg-indigo-500 p-2 px-4 text-white flex gap-2 justify-center ${playingTimer && "w-full"}`}
          >
            <Image
              alt=""
              width={10}
              height={10}
              src={playingTimer ? PauseSVG.src : PlaySVG.src}
            />
            <span>{playingTimer ? "Pause" : "Begin"} Timer</span>
          </button>
        </div>
      </div>
    </main>
  );
}
