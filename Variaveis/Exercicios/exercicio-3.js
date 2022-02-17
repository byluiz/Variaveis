//Resultado da Soma com String template
let x = 10, y = 2;
let resultado = x + y;
console.log(`a soma de ${x} + ${y} é igual a ${resultado}`) 

//Resultado da Soma com String template
//Escopo para criar as mesmas variaveis no mesmo arquivo
{
let x = 10, y = 2;
let resultado = x + y;
let mensagem = "A soma de "  + x + " e " + y + " é " + resultado;
console.log(mensagem)
}