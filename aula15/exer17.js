/* mostrar os valores do vetor de maneira mais reduzida utilizando uma estrutura de repetição - for()*/

// código tradicional do percurso do vetor
let valores = [2, 5, 8, 9, 6, 1, 7]



for(let posicao=0; posicao < valores.length; posicao++) {

    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`);
}





// código mais atual para mostrar os elementos dentro do vetor

let valores1 = [2, 5, 8, 9, 6, 1, 7]

for(let posicao in valores1) {
    console.log(valores1[posicao])
}






// método index.Of() para encontrar a posição(índice) de um elemento


let valores2 = [2, 5, 8, 9, 6, 1, 7]

/*
let pos = valores2.indexOf(6)

console.log(pos) --> saída = 4 */

console.log(valores2.indexOf(1)) // forma mais direta sem precisar criar outra variável
console.log(valores2.indexOf(3)) // saída = -1 (pois esse valor não existe e não foi encontrado, retorna -1)







// usando if/else para aparecer uma mensagem quando o valor não for encontrado

let valores3= [2, 5, 8, 9, 6]

let pos = valores3.indexOf(4);

if(pos == -1) /* quando o valor não é encontrado*/ {
    console.log('Valor não encontrado!');
} else {
    console.log(`O valor está na posição ${pos}`);
}

