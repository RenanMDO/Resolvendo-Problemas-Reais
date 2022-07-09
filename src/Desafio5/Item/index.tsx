import React, { memo } from "react";

import { useItemController } from "./useItemController";

interface ItemProps {
  valor: number;
}
const Item: React.FC<ItemProps> = ({ valor }) => {
  const { renderCounter, count, addCount, parOuImpar } = useItemController();

  return (
    <li>
      <button onClick={addCount}>
        adiciona + 1 na contagem do item {valor}
      </button>
      <p>
        contagem: {count} é {parOuImpar(count)}
      </p>
      <p>renderizou: {renderCounter}</p>
    </li>
  );
};

export default memo(Item)