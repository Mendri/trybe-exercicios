/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

document.getElementById("doisAnos").innerText = "Me vejo programando em uma empresa e ajudando a sustentar minha casa";

document.getElementsByClassName("main-content")[0].style.backgroundColor = "green";

document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";

document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";

document.getElementsByTagName("p")[0].innerText = document.getElementsByTagName("p")[0].innerText.toUpperCase();


for (let i = 0; i < document.getElementsByTagName("p").length; i ++) {
    console.log(document.getElementsByTagName("p")[i].innerHTML)
}