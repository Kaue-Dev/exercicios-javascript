function calcularMedia() {
    //Criar referencia aos elementos da página
    let inNome = document.getElementById("inNome")
    let inNota1 = document.getElementById("inNota1")
    let inNota2 = document.getElementById("inNota2")
    let outNome = document.getElementById("outNome")
    let outMedia = document.getElementById("outMedia")
    let outSituacao = document.getElementById("outSituacao")
    
    //Obtem os valores dos campos de edição da página
    let nome = inNome.value
    let nota1 = Number(inNota1.value)
    let nota2 = Number(inNota2.value)
    
    //Calcular média das notas
    let media = (nota1 + nota2) / 2

    //Cria a estrutura condicional para verificar situação do aluno
    if (media >= 7) {
    //Apresenta os dados na tela
        outNome.textContent = "Olá " + nome
        outMedia.textContent = "A média é: " + media.toFixed(1)
        outSituacao.textContent = "Parabéns você vai sair do IFPR"
        outSituacao.style.color = "green"
    } else  if (media >= 4) {
        outNome.textContent = "Olá " + nome
        outMedia.textContent = "A média é: " + media.toFixed(1)
        outSituacao.textContent = "Você está de exame, pode não sair do IFPR"
        outSituacao.style.color = "orange"
    } else {
        outNome.textContent = "Olá " + nome
        outMedia.textContent = "A média é: " + media.toFixed(1)
        outSituacao.textContent = "Você falhou"
        outSituacao.style.color = "red"
    }
}

//Criar referencia ao elemento btnCalcular
let btResultado = document.getElementById("btnCalcular")

//Registrar um evento de click a função calcularMedia
btResultado.addEventListener("click", calcularMedia)