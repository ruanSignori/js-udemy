"use client";

import { secondsToTime } from "@/functions";
import { useInterval } from "@/hooks";
import { useState } from "react";

type PomodoroTimerProps = {
  /**O valor atribuído é convertido para segundos */
  pomodoroTimer: number;
};

export function PomodoroTimer({ pomodoroTimer }: PomodoroTimerProps) {
  const [mainTime, setMainTime] = useState(pomodoroTimer);

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
