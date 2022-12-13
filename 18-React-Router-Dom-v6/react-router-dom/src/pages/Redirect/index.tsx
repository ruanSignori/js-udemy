import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Redirect() {
  const [time, setTime] = useState(3)
  const timeout = useRef(0);
  const navigate = useNavigate()

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime(time => time - 1)
    }, 1000);

    if (time <= 0) navigate('/about', {
      state: `This is state ${Math.random()}`
    })

    return () => {
      clearTimeout(timeout.current)
    }
  }, [time])

  return (
    <h1>Você vai sair daqui em {time}</h1>
  );
}