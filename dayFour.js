// var segredo = Math.round(Math.random() * 10);
// console.log(segredo);

function sorteia() {
    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {

    var segredos = [];
    var numero = 1;

    while (numero <= quantidade) {

        var numeroAleatorio = sorteia();
        var achou = false;

        if (numeroAleatorio != 0) {
            for (let posicao  = 0; posicao  < segredos.length; posicao++) {
                if (segredos[posicao] == numeroAleatorio) {
                    achou = true;
                    break;
                };

            }
            if (achou == false) {
                segredos.push(numeroAleatorio);
                numero++;
            }
        }
    }
    return segredos;
}

var segredos = sorteiaNumeros(1);

console.log(segredos);

var input = document.querySelector("input");
var button = document.querySelector("button");

function verifica() {
    var achou = false;

    for (var posicao = 0; posicao < 4; posicao++) {
        if (input.value == segredos[posicao]) {
            alert("Você Acertou!!");
            achou = true;
            alert(`O número sorteado foi ${segredos}`);
            break;
        }
    }

    if (achou == false) {
        alert("Você Errou!!");
    }

    input.value = "";
    input.focus();
}
