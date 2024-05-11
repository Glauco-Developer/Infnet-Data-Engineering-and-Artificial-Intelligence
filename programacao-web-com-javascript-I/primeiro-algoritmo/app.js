function calcularIdade() {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const idade = anoAtual - anoNascimento;

    return idade
}

function calcularValorAdicional(aIdade) {
    const SALARIO_ACIMA_20 = 2000;
    const SALARIO_ATE_20 = 1000;
    const IDADE_LIMITE = 20;

    let adicional = SALARIO_ACIMA_20
    if(aIdade <= IDADE_LIMITE) {
        adicional = SALARIO_ATE_20
    }
    return adicional
}

function impressao() {    
    // input
    anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    nome = document.getElementById("nome").value;
    salarioBase = parseInt(document.getElementById("salarioBase").value);
    gratificacao = parseInt(document.getElementById("gratificacao").value);
    bonus = parseInt(document.getElementById("bonus").value);
    desconto = parseInt(document.getElementById("desconto").value);

    // processamento
    const idade = calcularIdade();
    
    let  adicional = calcularValorAdicional(idade);

    let salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional;

    // output
    mensagem = "Sou " + nome + " tenho " + idade + " anos e ganho R$" + salarioLiquido;
    alert(mensagem);
}