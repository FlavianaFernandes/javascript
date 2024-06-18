/* usar a lógica de programação para mostrar se a pessoa informar a hora e mostrar Bom dia/Boa tarde/Boa noite (usando if/else)

regras:
até 12h bom dia
+12 e <= 18 boa tarde
+18 boa noite */

let agora = new Date(); /*  função usada para mostrar a hora atual do sistema onde ele está rodando, ou seja, a hora do computador do usuário */

let hora = agora.getHours()  /* como é hora, usei o .getHour */
if(hora <= 12) {
    console.log('Bom dia!')
} else if(hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}



 