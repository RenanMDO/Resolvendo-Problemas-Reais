/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
  Para renderizar um componente com mais de um elemento, os mesmos devem estar envoltos em um unico elemento. Para resolver esse problema utilizei o Fragment, assim mantem um codigo limpo sem a utilização de muitas div's.
*/

export const Desafio1 = () => {
  return (
    <>
      <span>item 1</span>
      <span>item 2</span>
    </>
  )
}
