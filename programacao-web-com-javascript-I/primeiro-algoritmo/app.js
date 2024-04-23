// constantes
const SALARIO_ATE_20 = 1000;
const SALARIO_ACIMA_20 = 2000;

// input
anoNascimento = parseInt(prompt("Insira seu ano de nascimento"));
nome = prompt("Insira seu nome");
salarioBase = parseFloat(prompt("Insira seu salário base"));
gratificacao = parseFloat(prompt("Insira sua gratificação"));
bonus = parseFloat(prompt("Insira seu bônus"));
desconto = parseFloat(prompt("Informe o desconto"));

salarioLiquido = 0;
adicional = 0;

// processamento
hoje = new Date();
anoAtual = hoje.getFullYear();
idade = anoAtual - anoNascimento;

adicional = idade <= 20 ? SALARIO_ATE_20 : SALARIO_ACIMA_20;

salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional;

// output
mensagem = "Sou " + nome + " tenho " + idade + " anos e ganho R$" + salarioLiquido;
alert(mensagem);

console.log('Programação Web com JavaScript I [24E2_2]')