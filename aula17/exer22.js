// Objetos em JS

let pessoa = { 
    nome: 'Flaviana',
    sexo: 'feminino',
    idade: 30,
    altura: 1.64,
    peso: 60.5,

    engordar(peso=0){     // function dentro de um objeto (chamamos de método). defini o parâmetro de peso=0 para o caso desse valor aumentar

        console.log('Engordou!');
        this.peso = this.peso + peso // forma abreviada 'this.peso += peso'. usar 'this' nos permite acessar os outros atributos e métodos desse objeto. Isso é essencial para que o método possa modificar ou usar esses atributos e métodos de maneira correta.
    }}

console.log(pessoa.nome);
console.log(pessoa.altura);
console.log(pessoa.idade);

// console.log(pessoa.nome, pessoa.altura, pessoa.idade); --> também podemos mostrar tudo em um só console

pessoa.engordar(9) // aumentei mais 9kg e adicionei ao peso que tinha antes
console.log(pessoa.peso) // mostrará o peso atual