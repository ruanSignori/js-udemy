"use client";

import { secondsToTime } from "@/functions";
import { useInterval } from "@/hooks";
import { useState } from "react";

type PomodoroTimerProps = {
  /**Tempo em minutos que a atividade vai durar */
  pomodoroTimer: number;

  /**Tempo em minutos de descanso entre cada Pomodoro */
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
};

export function PomodoroTimer({ pomodoroTimer }: PomodoroTimerProps) {
  const [mainTime, setMainTime] = useState(pomodoroTimer * 60);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1);
  return (
    <div>
      <h2>Pomodoro</h2>
      <p className="timer">{secondsToTime(mainTime)}</p>
      <button className="btn">Eae</button>
    </div>
  );
}
