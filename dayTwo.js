const nome = prompt("Qual seu nome");
const anos = prompt("Qual sua idade");
const linguagem = prompt("Qual linguagem você está estudando?");
alert(`Olá ${nome}, você têm ${anos} e já está aprendendo ${linguagem}`);


const S = 1;
const N = 2;
const pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com número ${S} para Sim, ou ${N} para Não`);
if (pergunta == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso");
}
if (pergunta == 2) {
    alert("Paia demais, troca essa linguagem ai, quer tentar outra?");
}

