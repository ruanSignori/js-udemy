import { useEffect, useRef } from "react";

/**Definir intervalo de tempo */
export function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null
): void {
  const savedCallback = useRef<C>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay * 1000);
      return () => clearInterval(id);
    }
  }, [delay]);
}
