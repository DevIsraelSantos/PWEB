const imgAberta = "./imagens/janelaAberta.jpg"
const imgFechada = "./imagens/janelaFechada.jpg"
const imgQuebrada = "./imagens/janelaQuebrada.jpg"

document.addEventListener("DOMContentLoaded", function() {
    const $imagem = document.querySelector("img")
    $imagem.src = imgFechada
    $imagem.addEventListener("mouseover", () => {
        $imagem.src = imgAberta
    })
    $imagem.addEventListener("mouseout", () => {
        $imagem.src = imgFechada
    })
    $imagem.addEventListener("click", () => {
        $imagem.src = imgQuebrada
    })
})