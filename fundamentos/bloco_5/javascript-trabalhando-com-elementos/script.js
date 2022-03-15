let corpo = document.querySelector('body');

let titulo = document.createElement('h1');
titulo.innerText = "Exercício 5.2 - JavaScript DOM";
titulo.className = 'title'

let principal = document.createElement('main');
principal.className = 'main-content'

let secao = document.createElement('section');
secao.className = 'center-content'

let paragrafo = document.createElement('p');
paragrafo.innerText = "Algum Texto"

let secao2 = document.createElement('section');
secao2.className = 'left-content'

let secao3 = document.createElement('section');
secao3.className = 'right-content'

let imagem  = document.createElement('img');
imagem.src = 'https://picsum.photos/200'
imagem.className = 'small-image';

let listaNaoOrdenada = document.createElement('ul');

for (let i = 0; i < 10; i += 1) {
    listaNaoOrdenada.appendChild(document.createElement('li'));
}

let subtitulo1 = document.createElement('h3');
subtitulo1.className = 'description'
let subtitulo2 = document.createElement('h3');
subtitulo2.className = 'description'
let subtitulo3 = document.createElement('h3');
subtitulo3.className = 'description'

corpo.appendChild(titulo);
corpo.appendChild(principal);
principal.appendChild(secao);
principal.appendChild(secao2);
principal.appendChild(secao3);
principal.appendChild(subtitulo1);
principal.appendChild(subtitulo2);
principal.appendChild(subtitulo3);
secao.appendChild(paragrafo);
secao2.appendChild(imagem);
secao3.appendChild(listaNaoOrdenada);

document.querySelector('li').innerText = "um";
document.querySelector('li').nextSibling.innerText = "dois";
document.querySelector('li').nextSibling.nextSibling.innerText = "três"
document.querySelector('li').nextSibling.nextSibling.nextSibling.innerText = "quatro"
document.querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling.innerText = "cinco"
document.querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerText = "seis"
document.querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerText = "sete"
document.querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerText = "oito"
document.querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerText = "nove"
document.querySelector('ul').lastChild.innerText = "dez";
document.querySelector('main').style.backgroundColor = "green"
document.querySelector('ul').removeChild(document.querySelector('ul').lastChild);
document.querySelector('ul').removeChild(document.querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);