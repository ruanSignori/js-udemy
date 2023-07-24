"use client";

import { secondsToTime } from "@/functions";
import { useInterval } from "@/hooks";
import { useEffect, useState } from "react";

type PomodoroTimerProps = {
  /**Tempo em minutos que a atividade vai durar */
  pomodoroTimer: number;

  /**Tempo em minutos de descanso entre cada Pomodoro */
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
};

export function PomodoroTimer({
  pomodoroTimer,
  shortRestTime,
  longRestTime,
  cycles,
}: PomodoroTimerProps) {
  const [mainTime, setMainTime] = useState(pomodoroTimer * 60);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add("bg-green-300");
    if (resting) document.body.classList.remove("bg-green-300");
  }, [working]);

  const handleConfigureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(pomodoroTimer * 60);
  };

  const handleConfigureRest = (long: boolean) => {
    long ? setMainTime(longRestTime) : setMainTime(shortRestTime);

    setTimeCounting(true);
    setWorking(false);
    setResting(true);
  };

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1 : null
  );
  return (
    <div>
      <h2 className="text-center text-xl font-bold">Pomodoro</h2>
      <p className="timer">{secondsToTime(mainTime)}</p>
      <div className="flex justify-center gap-8">
        <button className="btn-green" onClick={() => handleConfigureWork()}>
          Começar
        </button>

        <button className="btn-red" onClick={() => handleConfigureRest(false)}>
          Parar
        </button>
        {working && !resting && (
          <button
            className="btn-white"
            onClick={() => setTimeCounting(!timeCounting)}
          >
            {timeCounting ? "Pausar" : "Retomar"}
          </button>
        )}
      </div>
    </div>
  );
}
