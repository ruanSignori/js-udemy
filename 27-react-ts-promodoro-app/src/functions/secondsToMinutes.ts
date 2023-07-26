import { zeroLeft } from "./zeroLeft";

/**Converte os segundos para minutos em uma string formatada */
export function secondsToMinutes(second: number): string {
  const oneMinute = 60;

  const minutes = zeroLeft((second / oneMinute) % 60);
  const seconds = zeroLeft((second % oneMinute) % 60);
  return `${minutes}:${seconds}`;
}
