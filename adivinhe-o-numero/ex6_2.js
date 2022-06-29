let numero = Math.floor(Math.random() * 100);
console.log(numero);
let erro = [];


const frm = document.querySelector("form");
let outAjuda = document.getElementById("outDica");
let outFalha = document.getElementById("outErros");
let outChance = document.getElementById("outChances");
let inNumero = document.getElementById("inNumero");


frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let tente = Number(frm.inNumero.value);
  if (tente != numero) {
    if (erro.length > 5) {
      outFalha.textContent = `${erro.length}: (${erro})`;
      outChance.textContent = 6 - erro.length;
      outAjuda.textContent = `Você perdeu! O número certo era: ${numero}`;
      frm.btNovo.setAttribute("class", "exibe");
      return;
    }
    erro.push(tente);
    outFalha.textContent = `${erro.length}: (${erro})`;
    outChance.textContent = 6 - erro.length;
    inNumero.value = inNumero.defaultValue;
    
    if (tente > numero) {
      inNumero.setAttribute("max", tente);
    } else {
      inNumero.setAttribute("min", tente);
    }
    outAjuda.textContent = `O número é maior que ${inNumero.getAttribute("min")} e menor que ${inNumero.getAttribute("max")}.`;

  } else if (erro.length < 6) {
    outAjuda.textContent = `Você acertou o número: ${numero}. Parabéns!`;
    frm.btNovo.setAttribute("class", "exibe");
    return;
  }

});
frm.btNovo.addEventListener("click", () => {
  console.log("Botão jogar novamente clicado");
  erro = [];
  outAjuda.textContent = outAjuda.defaultValue;
  outFalha.textContent = 0;
  outChance.textContent = 6;
  inNumero.setAttribute("max", 100);
  inNumero.setAttribute("min", 0);
  inNumero.value = inNumero.defaultValue;
  numero = Math.floor(Math.random() * 100); 
  console.log(numero);
  frm.btNovo.setAttribute("class", "oculta");
});