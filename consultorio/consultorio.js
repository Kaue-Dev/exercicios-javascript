//Criar referencia aos elementos do HTML
const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] //Declara o vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault() //Formulario não enviar dados
    const nome = frm.inPaciente.value //Obtem o nome do paciente
    pacientes.push(nome) //Adiciona elemento no final do vetor
    console.log(pacientes)
    let lista = "" //String para concaternar pacientes
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }
    respLista.innerText = lista //Exibe a lista de pacientes
    frm.inPaciente.value =  "" //Limpa o conteúdo do campo
    frm.inPaciente.focus() //Posiciona o cursor no campo
})

frm.btnUrgencia.addEventListener("click", () => {
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido")
    }
    const nome = frm.inPaciente.value //Obtem o nome do paciente
    pacientes.unshift(nome) //Adiciona o paciente no inicio do vetor
    let lista = "" //String para concatenar
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${pacientes[i]}\n`))
    respLista.innerText = lista //Exibe a lista de pacientes
    frm.inPaciente.value =  "" //Limpa o conteúdo do campo
    frm.inPaciente.focus() //Posiciona o cursor no campo
})
