"use client";

import { ChangeEvent, useEffect, useState } from "react";

export default function CounterOptions() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const formatter = new Intl.NumberFormat("en-in", {
    minimumIntegerDigits: 2,
  });

  const updateTimer = (e: ChangeEvent<HTMLSelectElement>) => {
    const fragmentName = e.target.name;

    switch (fragmentName) {
      case "hours": {
        setHours(Number(e.target.value));
        break;
      }

      case "minutes": {
        setMinutes(Number(e.target.value));
        break;
      }

      case "seconds": {
        setSeconds(Number(e.target.value));
        break;
      }

      default: {
        console.log("ERROR: Changing Invalid Time Fragment!!");
      }
    }
  };

  const generateEmptyArrayWithLength = (length: number) => {
    return Array.from<undefined>({ length });
  };

  useEffect(() => {
    localStorage.setItem(
      "time",
      JSON.stringify({
        hours,
        minutes,
        seconds,
      })
    );
  }, [hours, minutes, seconds]);

  return (
    <>
      <div className="bg-gray-200 pr-1">
        <select className="p-2 px-3" onChange={updateTimer} name="hours">
          {generateEmptyArrayWithLength(24).map((_, idx) => {
            return (
              <option key={`hours_${idx}`} value={idx}>
                {formatter.format(idx)}
              </option>
            );
          })}
        </select>
      </div>

      <div className="bg-gray-200 pr-1">
        <select className="p-2 px-3" onChange={updateTimer} name="minutes">
          {generateEmptyArrayWithLength(60).map((_, idx) => {
            return (
              <option key={`minutes_${idx}`} value={idx}>
                {formatter.format(idx)}
              </option>
            );
          })}
        </select>
      </div>

      <div className="bg-gray-200 pr-1">
        <select className="p-2 px-3" onChange={updateTimer} name="seconds">
          {generateEmptyArrayWithLength(60).map((_, idx) => {
            return (
              <option key={`seconds_${idx}`} value={idx}>
                {formatter.format(idx)}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
