"use client";

import { PomodoroTimer } from "@/components";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PomodoroTimer defaultPomodoroTimer={1500} />
    </main>
  );
}
