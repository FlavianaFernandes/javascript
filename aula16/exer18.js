
// exemplo 1: criar uma função que mostre se o número é par ou ímpar
// para isso precisamos saber que números pares são divisíveis por 2 e seu resto é 0. Se for diferente disso, é ímpar
// num % 2 == 0 --> num é a variável criada / %2 divido e por dois e resto == 0

function parimpar(num) { // o parâmetro real é jogado aqui dentro do formal

    if (num % 2 == 0) { // depois ele passa pelo corpo da função

        return `O número ${num} é par!` // esse é o retorno que vai ser jogado dentro do console.log se for par
    } else {
        return `O número ${num} é ímpar!` // esse é o retorno que vai ser jogado dentro do console.log se for ímpar
    }
} 

let res = parimpar(24); // criei uma variável res para receber o valor da chamada. 15 é o parâmetro real dessa chamada

console.log(res); // console.log para mostrar o que foi retornado
