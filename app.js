var direitoremover = document.querySelector(".direito_remover")
var direitoresultado = document.querySelector(".direito_resultado")
var titulo = document.querySelector(".titulo")

function verificarTexto() {
    var inputTxt = document.querySelector('textarea').value
    if(inputTxt <= 0) {
        descricaoTxt.innerHTML = "Você precisa inserir um texto"
    }
    return
}

function remover1vez() {
    direitoremover.remove(direitoremover)
    var element = document.getElementById('botao_copiar');
    element.classList.remove("desligar")
    element.classList.add("ligar")
}

function criptografar() {
    verificarTexto()
    remover1vez()

    var inputTxt = document.querySelector('textarea').value
    var cripto = inputTxt.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat')
        direitoresultado.innerHTML = cripto
        titulo.innerHTML = "Texto criptografado com sucesso"
}

function descriptografar() {
    verificarTexto()
    remover1vez()

    var inputTxt = document.querySelector('textarea').value
    var cripto = inputTxt.replaceAll('enter', 'ee').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u')
        direitoresultado.innerHTML = cripto
        titulo.innerHTML = "Texto descriptografado com sucesso"
}

function copiar() {
    var inputTxt = document.querySelector('textarea').value
    var cripto = inputTxt.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat')

    navigator.clipboard.writeText(cripto)
}
