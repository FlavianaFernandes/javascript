/* 
 # Usando números fatoriais dentro de funções JS #

 - O fatorial de um número é o resultado de multiplicar esse número por todos os números menores que ele até chegar ao número 1. É representado por um ponto de exclamação após o número, como assim: n!.

 Ex calcular fatorial do número 5.

a) 5!: 5 vezes 4 vezes 3 vezes 2 vezes 1.
Então, 5! = 5 × 4 × 3 × 2 × 1 = 120. */



// ex 1: calcular o fatorial de um número

function fatorial(n) { // 1º criei uma função chamada fatorial que vai calcular o fatorial de um número 'n'. 
    
    let fator = 1 // 2º criei a variável 'fator' com valor 1, porque se começasse com 0, qualquer coisa multiplicada por 0 seria 0.

    for(let c = n; c > 1; c--) { // 3º esse é loop. 'let c = n' outra variável chamada c e damos a ela o valor de n (número o qual queremos o fatorial). 'c' começa igual ao número que queremos calcular. 'c > 1' o teste do loop. Ele pergunta: "O valor de c é maior que 1?" Se for, o loop continua; se não, o loop para. 'c--' Este é o contador, cada vez que o loop repete, c diminui de 1. É como se estivéssemos contando para trás.

        fator = fator * c
    }
    return fator
}

console.log(fatorial(5)) // nesse exemplo o 'n' vale 5, calcular o fatorial de 5