console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 19;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos Possíveis: `);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de Idade");
//     listaDeDestinos.splice(1, 1);  //removendo item
// }

// else if (estaAcompanhada) {
//     console.log("Comprador está acompanhada");
//     listaDeDestinos.splice(1, 1); //removendo item
// }

// else {
//     console.log("Comprador não é maior de idade e não posso vender!");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!\n");
    listaDeDestinos.splice(2, 1);  //removendo item
} else {
    console.log("Comprador não é maior de idade e não posso vender!\n");
}

console.log("Embarque: \n");
if(idadeComprador > 18 && temPassagemComprada) {
    console.log("Boa Viagem!\n");
} else {
    console.log("Você não pode embarcar!\n");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);