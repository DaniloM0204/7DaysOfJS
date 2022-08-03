let Frutas = [];
let Laticinios = [];
let Frios = [];
let Doces = [];


alert("Bem-vindo ao programa de compras");

let maisProdutos = "S";

while (maisProdutos != "N") {
    maisProdutos = prompt("Quer adicionar mais produtos? Responda com S para Sim, ou N para Não.");
    while (maisProdutos != "S" && maisProdutos != "N") {
        alert(`Operação Desconhecida`);
        maisProdutos = prompt("Quer adicionar mais produtos? Responda com S, ou N.");
    }

    if (maisProdutos === "N") {
        break;
    }

    produtoNovo = prompt("Qual produto deseja inserir?");
    categoriaComida = prompt(`Qual a categoria da comida, ${1} - Frutas, ${2}- Laticínios, ${3}- Frios ou ${4} - Doces?`);

    if(categoriaComida == 1){
        Frutas.push(produtoNovo);
    } else if (categoriaComida == 2){
        Laticinios.push(produtoNovo);
    } else if (categoriaComida == 3){
        Doces.push(produtoNovo);
    } else if (categoriaComida == 4){
        Frios.push(produtoNovo);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras:\n  Frutas: ${Frutas}\n  Laticínios: ${Laticinios}\n  Doces: ${Doces}\n  Congelados: ${Frios}`);
