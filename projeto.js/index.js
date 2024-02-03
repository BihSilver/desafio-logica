//Desafio do Curso Lógica de Programação

console.log("Oi Herói! digite seu nome: ")
let nomeHeroi = "Puppy"

console.log("Bem vindo " + nomeHeroi + ", informe a sua quantidade de XP atual, por favor: ") 
let xpUsuario = 5000
let nivelUsuario = ""

if (xpUsuario < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpUsuario >= 1001 && xpUsuario <= 2000) {
    nivelUsuario = "Bronze";
} else if (xpUsuario >= 2001 && xpUsuario <= 5000) {
    nivelUsuario = "Prata";
} else if (xpUsuario >= 5001 && xpUsuario <= 7000) {
    nivelUsuario = "Ouro";
} else if (xpUsuario >= 7001 && xpUsuario <= 8000) {
    nivelUsuario = "Platina";
} else if (xpUsuario >= 8001 && xpUsuario <= 9000) {
    nivelUsuario = "Ascendente";
} else if (xpUsuario >= 9001 && xpUsuario <= 10000) {
    nivelUsuario = "Imortal";
} else {
    nivelUsuario = "Radiante";
}

console.log("O Herói " + nomeHeroi + " está no nível: " + nivelUsuario)