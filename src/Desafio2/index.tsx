import { useState } from 'react';

/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
  O problema era a falta do atributo key para que o react possa identificar em qual item do array foi feita alguma alteração. Para solucionar o problema, foi adicionado ao método map o parâmetro de índice chamado de key, assim podendo ser utilizado para identificar corretamente cada item da renderização da lista.
*/

export const Desafio2 = () => {
  const [list, setList] = useState([
    1, 2
  ]);

  return (
    <ul>
      {list.map((item, key) => <li key={key}>item: {item}</li>)}
    </ul>
  )
}
