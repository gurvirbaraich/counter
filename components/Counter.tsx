"use client";

import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

export default function Counter() {
  const [seconds, setSeconds] = useState<number>(0);
  const [date, setDate] = useState<Moment | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

  useEffect(function () {
    const initialSeconds: number = JSON.parse(localStorage.getItem("time")!);
    const timerEndsAt: Moment = moment().add(initialSeconds + 1, "seconds");

    setDate(timerEndsAt);
    setSeconds(Number(timerEndsAt.diff(moment(), "seconds")) - 1);
    setRemainingSeconds(Number(timerEndsAt.diff(moment(), "seconds")) - 1);
  }, []);

  useEffect(
    function () {
      if (!date) return;
      if (seconds == 0) return;

      const remainingSeconds: number = date.diff(moment(), "seconds");
      setRemainingSeconds(Number(remainingSeconds));

      const intervalID = setInterval(() => {
        const remainingSeconds: number = date.diff(moment(), "seconds");

        if (remainingSeconds == 0) {
          clearInterval(intervalID);
        }

        setRemainingSeconds(Number(remainingSeconds));
      }, 1000);
    },
    [date]
  );

  return (
    <div
      className="w-full aspect-square timer rounded-full overflow-hidden p-1"
      style={{
        // @ts-ignore
        "--percent": 100 - Math.floor((remainingSeconds / seconds) * 100) + "%",
      }}
    >
      <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-xl">
        {moment(remainingSeconds, "ss").format("HH:mm:ss")}
      </div>
    </div>
  );
}
