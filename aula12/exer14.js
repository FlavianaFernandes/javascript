/* usar a lógica de programação para mostrar informar o dia da semana (usando swhith case), mostrar também o dia da semana que está no computador do usuário */


/*
exemplo 1:

let diaSemana = 2;
 
Dias da semana - Como o JS interpreta
 0 = domingo
 1 = Segunda-feira 
 2 = Terça-feira 
 3 = Quarta-feira 
 4 = Quinta-feira 
 5 = Sexta-feira
 6 = Sábado 

switch (diaSemana) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda-feira');
        break;
    case 2:
        console.log('Terça-feira');
        break;
    case 3:
        console.log('Quarta-feira');
        break;
    case 4:
        console.log('Quinta-feira');
        break;
    case 5:
        console.log('Sexta-feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido!')  --> funciona como um senão(else), para o caso de não se encaixar em nenhum dos casos 
        break;
}
*/


let agora = new Date();   /* new Date() função usada para criar um novo objeto de data. Esse objeto contém informações sobre a data e a hora atuais ou uma data e hora específica */

let diaSemana = agora.getDay()  /*  para usar a função 'new Date()', é preciso colocar a variável onde ela foi usada e colocar o .get(escolhe hora, mês, ano, data...) */
  

/* 
Dias da semana - Como o JS interpreta
 0 = domingo
 1 = Segunda-feira 
 2 = Terça-feira 
 3 = Quarta-feira 
 4 = Quinta-feira 
 5 = Sexta-feira
 6 = Sábado 
 */ 

switch (diaSemana) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda-feira');
        break;
    case 2:
        console.log('Terça-feira');
        break;
    case 3:
        console.log('Quarta-feira');
        break;
    case 4:
        console.log('Quinta-feira');
        break;
    case 5:
        console.log('Sexta-feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido!') 
        break;
}



