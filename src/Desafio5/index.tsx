import React from "react";
import Item from "./Item";
import { useDesafio5Controller } from "./useDesafio5Controller";

/* TODO
  O componente abaixo está com problemas. Resolva o problema e melhore a performance.

  Obs. considere o componente filho também para resolver esse desafio

  Comentários sobre a sua solução:
  Primeiramente para a função parOuImpar, a mesma foi adicionada no useItemController.ts, retirando das propriedades da const Item
  par impar no item também.
  Utilização do Reac.memo no componente Item para não renderizar novamente o componente e ele gravar(memorizar) o componente Item que ja estava renderizado.
  Para o uso do useRef do contador de renderização, foi necessário usar useEffect para somar a contagem de renderização.
  E por fim na linha 30 do componente Desafio5 foi necessário adicionar um espaço para igualar o teste.
*/

export function Desafio5() {
  const { list, addItem, numero, parOuImpar } = useDesafio5Controller();
  return (
    <>
      <button onClick={addItem} data-testid="btn1">adiciona + 1 item na lista
      </button>
      <span data-testid="size">{list.length}</span>
      <ul>
        {list.map((item, key) => (
          <Item key={key} valor={item} />
        ))}
      </ul>
      <p>
        {numero} é  {parOuImpar(numero)}
      </p>
    </>
  );
}
