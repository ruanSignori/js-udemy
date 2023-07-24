"use client";

import { PomodoroTimer } from "@/components";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PomodoroTimer
        pomodoroTimer={3}
        cycles={3}
        longRestTime={10}
        shortRestTime={13}
      />
    </main>
  );
}
