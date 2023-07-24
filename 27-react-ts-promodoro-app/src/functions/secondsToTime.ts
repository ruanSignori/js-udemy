/**Converte os segundos (number) para uma string formatada */
export function secondsToTime(second: number): string {
  const oneMinute = 60;
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, "0");

  const minutes = zeroLeft((second / oneMinute) % 60);
  const seconds = zeroLeft((second % oneMinute) % 60);
  return `${minutes}:${seconds}`;
}
