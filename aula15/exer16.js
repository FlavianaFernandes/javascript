// Variáveis compostas - Arrays(vetores)

let numero = [5, 9, 7, 2, 11] /* criei um vetor */

numero[5] = 6; /* para adicionar mais um variável, coloquei valor=6 no índice 5. */

numero.push(4); /* push() adiciona um ou mais elementos ao final do array. */

numero.sort(); /* sort() coloca os valores em ordem */

console.log(`Nosso vetor é o ${numero} e tem ${numero.length} posições`); /* ${} um template */
// .length (atributo) indica quantos elementos tem dentro desse Array.

console.log(numero[4]); /* informa o valor correspondente ao índice 4 */
console.log(numero[0]); /*informa o valor correspondente ao índice 0 */


/*obs imporatante
Para obter a ordenação numérica correta, pode-se usar uma função de comparação dentro do método sort():

ex:
let numero = [5, 9, 7, 2, 11];

numero.sort((a, b) => a - b);
console.log(numero);
Saída: [2, 5, 7, 9, 11]
*/
