class Pessoa {
    constructor(altura, genero) {
        this.altura = altura;
        this.genero = genero;
    }
}

function leitura(vezes) {
    let lista = [];

    for (let i = 0; i < vezes; i++) {
        let genl = prompt("Digite seu gênero (M ou F): ");
        let altl = parseInt(prompt("Digite sua altura em centímetros: "));
        let pessoa = new Pessoa(altl, genl);
        lista.push(pessoa);
    }

    return lista;
}

const PARTICIPANTES = 3;
let somaaltura = 0;
let qthomens = 0;
let listaaltura = [];

let lista = leitura(PARTICIPANTES);

for (let i = 0; i < lista.length; i++) {
    listaaltura.push(lista[i].altura);

    if (lista[i].genero === 'M' || lista[i].genero === 'm') {
        somaaltura += lista[i].altura;
        qthomens++;
    }
}

let maiorAltura = Math.max(...listaaltura);
let menorAltura = Math.min(...listaaltura);
let mediaAlturaMasculina = somaaltura / qthomens;
let numFeminino = PARTICIPANTES - qthomens;

alert(`A maior altura é de ${maiorAltura} e a menor é de ${menorAltura}`);
alert(`A média da altura das pessoas masculinas é de ${mediaAlturaMasculina}`);
alert(`O número de pessoas do gênero feminino é de: ${numFeminino}`);
