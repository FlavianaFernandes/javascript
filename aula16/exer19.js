// exemplo 2: escrever dois números e fazer a soma deles

function soma(n1, n2) {
    return n1 + n2;
}


console.log(soma(5));


// exemplo 3: caso a pessoa não defina um valor para um dos números, a conta vai apresentar um erro do tipo 'NaN', pois só um valor foi definido (o outro é undefined= indefinido).

// para resolver esse problema, podemos adicionar valores iniciais a esses parâmetros, para o caso de um dos valores não serem passamos, então será somado o valor passado + 0

function soma(n1=0, n2=0) {
    return n1 + n2;
}


console.log(soma(5));