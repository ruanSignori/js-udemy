"use client";

import { secondsToTime } from "@/functions";
import { useInterval } from "@/hooks";
import { useState } from "react";

type PomodoroTimerProps = {
  /**O valor atribuído é convertido para segundos */
  defaultPomodoroTimer: number;
};

export function PomodoroTimer({ defaultPomodoroTimer }: PomodoroTimerProps) {
  const [mainTime, setMainTime] = useState(defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1);
  return (
    <div>
      <h2>Pomodoro {secondsToTime(mainTime)}</h2>
      <button className="btn">Eae</button>
    </div>
  );
}
