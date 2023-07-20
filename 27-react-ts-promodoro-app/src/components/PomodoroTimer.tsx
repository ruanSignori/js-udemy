"use client";

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
  }, 0.1);
  return <h2>Pomodoro {mainTime}</h2>;
}
