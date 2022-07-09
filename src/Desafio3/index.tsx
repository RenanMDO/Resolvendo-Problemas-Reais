import { useState } from 'react';

/* TODO
  O componente abaixo está com problemas. Existem muitos códigos desnecessários.
  Resolva, Refatore o código e simplifique.
*/

export const Desafio3 = () => {
  const [list, setList] = useState([
    1, 2
  ]);

  const quantidade = list.length;

  return (
    <div>
      <span> quantidade: {quantidade}</span>
      <ul>
        {list.map((item, key) => <li key={key}>item: {item}</li>)}
      </ul>
    </div>
  )
}
