// function escolheLinguagem(linguagem) {
//     alert(`Qual linguagem você prefere, Java ou Csharp?`);
//     linguagem = prompt(`Digite ${1} para Java, ou ${2} para Csharp`);
//     if (linguagem == 1) {
//         alert("A linguagem escolhida foi Java");
//     }
//     if (linguagem == 2){
//         alert("A linguagem escolhida foi Csharp");
//     }
// }

// function escolheFrame(framework) {
//     alert(`Qual framework quer aprender, VueJs ou ReactJs?`);
//     framework = prompt(`Digite ${1} para ReactJs, ou ${2} para VueJs`);
//     if (framework == 1) {
//         alert("Você escolheu ReactJs");
//     }
//     if (framework == 2) {
//         alert("Você escolheu VueJs");
//     }
// }

// function escolheArea(areaDesenvolvedor) {
//     alert("Qual tipo de desenvolvedor você quer ser, Front-end ou Back-end?");
//     areaDesenvolvedor = prompt(`Digite ${1} para Front-end, ou ${2} para Back-end`);
//     if (areaDesenvolvedor == 1) {
//         alert("Agora você é um Desenvolvedor Front-end");
//     }
//     if (areaDesenvolvedor == 2) {
//         alert("Agora você é um Desenvolvedor Back-end");
//     }
// }

function trilhaDeCarreira() {
    alert("Vamos começar o Jogo Tilha de Carreira");
    alert("Qual tipo de desenvolvedor você quer ser, Front-end ou Back-end?");
    areaDesenvolvedor = prompt(`Digite ${1} para Front-end, ou ${2} para Back-end`);

    if (areaDesenvolvedor == 1) {
        while (areaDesenvolvedor == 1) {
            alert("Agora você é um Desenvolvedor Front-end");
            alert(`Qual framework quer aprender, ReactJs ou VueJs?`);
            framework = prompt(`Digite ${1} para ReactJs, ou ${2} para VueJs`);
            if (framework == 1) {
            alert("Você escolheu ReactJs");
            }
            if (framework == 2) {
                alert("Você escolheu VueJs");
            }
            alert("Agora sua trilha de Carreira precisa de um caminho!!");
            carreira = prompt(`Digite ${1} se você deseja se especializar em alguma linguagem, e ${2} para se tornar fullstack`);
            if(carreira == 1){
                alert("Em que linguagem deseja especializar?");
                let nome = prompt(`[Python,Java,C++,C,Rust] digite o nome da lingua`);
                alert(`A lingua escolhida foi ${nome}`);
                alert(`Parabéns agora você é um Desenvolvedor Front-End com framework , com especialização na linguagem ${nome}`);
                break;
            }
            if (carreira == 2) {
                alert("Parabéns agora você é um Desenvolvedor FullStack");
                let link = `https://www.crampete.com/blogs/road-map-to-full-stack-web-development/`;
                alert(`Sugiro você ler o seguinte artigo ${link}`);
                break;
            }
        }

    }
    if (areaDesenvolvedor == 2) {
        while (areaDesenvolvedor == 2) {
            alert("Agora você é um Desenvolvedor Back-end");
            alert(`Qual linguagem você prefere, Java ou Csharp?`);
            linguagem = prompt(`Digite ${1} para Java, ou ${2} para Csharp`);
            if (linguagem == 1) {
                alert("A linguagem escolhida foi Java");
            }
            if (linguagem == 2){
                alert("A linguagem escolhida foi Csharp");
            }
            alert("Agora sua trilha de Carreira precisa de um caminho!!");
            carreira = prompt(`Digite ${1} se você deseja se especializar em alguma linguagem, e ${2} para se tornar fullstack`);
            if(carreira == 1){
                alert("Em que linguagem deseja especializar?");
                let nome = prompt(`[Python,Java,C++,C,Rust] digite o nome da lingua`);
                alert(`A lingua escolhida foi ${nome}`);
                alert(`Parabéns agora você é um Desenvolvedor Front-End com framework , com especialização na linguagem ${nome}`);
                break;
            }
            if (carreira == 2) {
                alert("Parabéns agora você é um Desenvolvedor FullStack");
                let link = `https://www.crampete.com/blogs/road-map-to-full-stack-web-development/`;
                alert(`Sugiro você ler o seguinte artigo ${link}`);
                break;
            }
            break;
        }
    }
}

trilhaDeCarreira();
