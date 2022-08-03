let Um = 1
let stringUm = '1'
let Trinta = 30
let stringTrinta = '30'
let Dez = 10
let stringDez = '10'

console.log("If com condições padrão");
console.log("************************************************ \n")

if (Um === stringUm) {
    console.log(`As variáveis ${Um} e "${stringUm}" tem o mesmo valor, mas tipos diferentes`);
} else {
    console.log(`As variáveis ${Um} e "${stringUm}" não tem o mesmo valor`);
    console.log(`O tipo do número ${Um} e "${stringUm}" são: ${typeof(Um)} e ${typeof(stringUm)} \n`);
}

if (Trinta === stringTrinta) {
    console.log(`As variáveis ${Trinta} e "${stringTrinta}" tem o mesmo valor e mesmo tipo`);
} else {
    console.log(`As variáveis ${Trinta} e "${stringTrinta}" não tem o mesmo tipo`);
    console.log(`O tipo do número ${Trinta} e "${stringTrinta}" são: ${typeof(Trinta)} e ${typeof(stringTrinta)} \n`);
}

if (Dez === stringDez) {
    console.log(`As variáveis ${Dez} e "${stringDez}" tem o mesmo valor, mas tipos diferentes`);
} else {
    console.log(`As variáveis ${Dez} e "${stringDez}" não tem o mesmo valor`);
    console.log(`O tipo do número ${Dez} e "${stringDez}" são: ${typeof(Dez)} e ${typeof(stringDez)} \n`);
}

console.log("Concluímos que os tipos number e string não possuem o mesmo tipo. Pois não podem ser comparados");
console.log("************************************************\n");

console.log("If ternário");
console.log("************************************************\n");

Um === stringUm ? 
    console.log(`As variáveis ${Um} e "${stringUm}" tem o mesmo valor, mas tipos diferentes`)
    :
    console.log(`As variáveis ${Um} e "${stringUm}" não tem o mesmo valor`);
    console.log(`O tipo do número ${Um} e "${stringUm}" são: ${typeof(Um)} e ${typeof(stringUm)} \n`);

Trinta === stringTrinta ?
    console.log(`As variáveis ${Trinta} e "${stringTrinta}" tem o mesmo valor e mesmo tipo`)
    :
    console.log(`As variáveis ${Trinta} e "${stringTrinta}" não tem o mesmo tipo`);
    console.log(`O tipo do número ${Trinta} e "${stringTrinta}" são: ${typeof(Trinta)} e ${typeof(stringTrinta)} \n`);

Dez === stringDez ?
    console.log(`As variáveis ${Dez} e "${stringDez}" tem o mesmo valor, mas tipos diferentes`)
    :
    console.log(`As variáveis ${Dez} e "${stringDez}" não tem o mesmo valor`);
    console.log(`O tipo do número ${Dez} e "${stringDez}" são: ${typeof(Dez)} e ${typeof(stringDez)} \n`);

console.log("Concluímos que os tipos number e string não possuem o mesmo tipo. Pois não podem ser comparados")
console.log("************************************************\n");