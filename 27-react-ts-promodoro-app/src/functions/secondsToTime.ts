import { zeroLeft } from "./zeroLeft";

/**Converte os segundos para minutos em uma string formatada */
export function secondsToTime(second: number): string {
  const hours = zeroLeft(second / 3600);
  const oneMinute = 60;

  const minutes = zeroLeft((second / oneMinute) % 60);
  const seconds = zeroLeft((second % oneMinute) % 60);
  return `${hours}:${minutes}:${seconds}`;
}
