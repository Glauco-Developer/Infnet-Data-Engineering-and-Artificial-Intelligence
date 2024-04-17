// input
const nome = prompt("Insira seu nome");
const anoNascimento = prompt("Insira seu ano de nascimento");

// processamento
const anoAtual = new Date().getFullYear();
const idade = (anoAtual-anoNascimento);
const mensagem = "Sou " + nome + " e tenho " + idade + " anos";

// output
alert(mensagem);

console.log('Programação Web com JavaScript I [24E2_2]')