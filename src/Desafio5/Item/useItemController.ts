import { useRef, useState, useEffect } from "react";

export const useItemController = () => {
  const [count, setCount] = useState<number>(0);
  const addCount = () => setCount(count + 1);
  const renderCounter = useRef(1);

  useEffect(() => {
    renderCounter.current += 1;
  })

  const isPar = (valor: number) => valor % 2 === 0;
  const parOuImpar = (valor: number) => (isPar(valor) ? "Par" : "Impar");

  return { count, addCount, renderCounter: renderCounter.current, parOuImpar };
};
