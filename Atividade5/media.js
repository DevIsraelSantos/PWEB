const nome = prompt("Nome:")
const Nota1 = prompt("Nota 1:")
const Nota2 = prompt("Nota 2:")
const Nota3 = prompt("Nota 3:")

const media = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3)) / 3

alert(nome + " - Média " + media)