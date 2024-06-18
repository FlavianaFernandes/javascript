/* usar a lógica de programação para mostrar se a pessoa vota ou não usando if/else

regras:
se for < 16 não vota
se tem 16 e 17 voto opcional
+18 orbigatório
+65 opcional */

var idade = 17

if(idade < 16) {
    console.log(`Sua idade é ${idade} anos. Você não pode votar!`);
} else if(idade < 18 || idade > 70) {
    console.log(`Sua idade é ${idade} anos. Seu voto é opcional!`);
} else {
    console.log(`Sua idade é ${idade} anos. Seu voto é obrigatório!`);
}