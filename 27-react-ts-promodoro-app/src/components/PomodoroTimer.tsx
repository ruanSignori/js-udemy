"use client";

import { secondsToMinutes, secondsToTime } from "@/functions";
import { useInterval } from "@/hooks";
import { useCallback, useEffect, useState } from "react";

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
  const [mainTime, setMainTime] = useState(pomodoroTimer);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesWork, setCyclesWork] = useState(
    new Array(cycles - 1).fill(true)
  );
  const [completedCycles, setCompletedCyles] = useState(0);
  const [fullWorkingTime, setWorkingTime] = useState(0);
  const [numberPomodoro, setNumberPomodoro] = useState(0);

  const handleConfigureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(pomodoroTimer);
  }, [pomodoroTimer]);

  const handleConfigureRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      long ? setMainTime(longRestTime) : setMainTime(shortRestTime);
    },
    [longRestTime, shortRestTime]
  );

  useEffect(() => {
    if (mainTime > 0) return;

    if (working && cyclesWork.length > 0) {
      handleConfigureRest(false);
      cyclesWork.pop();
    }

    if (working && cyclesWork.length <= 0) {
      handleConfigureRest(true);
      setCyclesWork(new Array(cycles - 1).fill(true));
      setCompletedCyles(completedCycles + 1);
    }

    if (working) {
      setNumberPomodoro(numberPomodoro + 1);
    }

    if (resting) {
      handleConfigureWork();
    }
  }, [
    working,
    resting,
    mainTime,
    handleConfigureRest,
    cyclesWork,
    handleConfigureWork,
    numberPomodoro,
    cycles,
    completedCycles,
  ]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) {
        setWorkingTime(fullWorkingTime + 1);
      }
    },
    timeCounting ? 1 : null
  );
  return (
    <div>
      <h2 className="text-center text-xl font-bold">Pomodoro</h2>
      <p className="timer">{secondsToMinutes(mainTime)}</p>
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
      <div className="m-10 rounded bg-zinc-800 px-4 py-6 max-h-80 flex flex-col gap-3">
        <p className="text-zinc-100">Ciclos conluídos: {completedCycles}</p>
        <p className="text-zinc-100">
          Horas trabalhadas: {secondsToTime(fullWorkingTime)}
        </p>
        <p className="text-zinc-100">Pomodoro concluídos: {numberPomodoro}</p>
      </div>
    </div>
  );
}
