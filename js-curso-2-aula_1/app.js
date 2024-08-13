function cumprimentar(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
cumprimentar('h1', 'Calculadora simples!');
cumprimentar('p', 'Coloque o número dê espaço e colque o segundo:')

function verificarSoma() {
    tudo = document.querySelector('input').value;
    let numeros = tudo.split(' ').map(Number);
    if (numeros.length >= 2) {
        let numero1 = numeros[0];
        let numero2 = numeros[1];
        let resultado = Number(numero1) + Number(numero2);
        cumprimentar('h1', `O resultado é ${resultado}`);
        cumprimentar('p', ' ');
    } else {
        cumprimentar('h1', 'Tente novamente');
    } 
}

function verificarSub() {
    tudo = document.querySelector('input').value;
    let numeros = tudo.split(' ').map(Number);
    if (numeros.length >= 2) {
        let numero1 = numeros[0];
        let numero2 = numeros[1];
        let resultado = Number(numero1) - Number(numero2);
        cumprimentar('h1', `O resultado é ${resultado}`);
        cumprimentar('p', ' ');
    } else {
        cumprimentar('h1', 'Tente novamente');
    } 
}

function verificarMulti() {
    tudo = document.querySelector('input').value;
    let numeros = tudo.split(' ').map(Number);
    if (numeros.length >= 2) {
        let numero1 = numeros[0];
        let numero2 = numeros[1];
        let resultado = Number(numero1) * Number(numero2);
        cumprimentar('h1', `O resultado é ${resultado}`);
        cumprimentar('p', ' ');
    } else {
        cumprimentar('h1', 'Tente novamente');
    } 
}

function verificarDiv() {
    tudo = document.querySelector('input').value;
    let numeros = tudo.split(' ').map(Number);
    if (numeros.length >= 2) {
        let numero1 = numeros[0];
        let numero2 = numeros[1];
        let resultado = Number(numero1) / Number(numero2);
        cumprimentar('h1', `O resultado é ${resultado}`);
        cumprimentar('p', ' ');
    } else {
        cumprimentar('h1', 'Tente novamente');
    } 
}