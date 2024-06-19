/* Estrutura de repetição While e do...while

While: criar um contador que inicia no 1 e se repete enquanto o valor for <= 6 */

var contador = 1;

while (contador <= 8) {
    console.log(contador);
    contador++;  /* forma abreviada de contador = contador +1 */
}




/*  do...while: criar um contador que inicia no 1 e se repete até o 10 */

var contador1 = 1;

do {
    console.log(contador1);   /* garante que o bloco de código seja executado pelo menos uma vez, independentemente da condição. */

    contador1 = contador1 + 1;   /* ou contador1++; */
} while (contador1 <= 10);