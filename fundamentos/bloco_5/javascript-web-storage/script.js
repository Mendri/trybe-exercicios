window.onload = function () {
  let paragrafo = document.querySelector("body");
  let botaoFundoBranco = document.querySelector(".btn");
  botaoFundoBranco.addEventListener("click", mudaCorFundoBranco);
  let botaoFundoPreto = document.querySelectorAll(".btn")[1];
  botaoFundoPreto.addEventListener("click", mudaCorFundoPreto);
  let botaoCorBranco = document.querySelectorAll(".btn")[2];
  botaoCorBranco.addEventListener("click", mudaCorTextoBranco);
  let botaoCorPreto = document.querySelectorAll(".btn")[3];
  botaoCorPreto.addEventListener("click", mudaCorTextoPreto);
  let botaoFonte32 = document.querySelectorAll(".btn")[4];
  botaoFonte32.addEventListener("click", mudaTamanhoFonte32);
  let botaoFonte16 = document.querySelectorAll(".btn")[5];
  botaoFonte16.addEventListener("click", mudaTamanhoFonte16);
  let botaoMudaEspacamentoNormal = document.querySelectorAll(".btn")[6];
  botaoMudaEspacamentoNormal.addEventListener(
    "click",
    mudaEspacamentoFonteNormal
  );
  let botaoMudaEspacamento3 = document.querySelectorAll(".btn")[7];
  botaoMudaEspacamento3.addEventListener("click", mudaEspacamentoFonte3);
  let botaoEstiloSans = document.querySelectorAll(".btn")[8];
  botaoEstiloSans.addEventListener("click", mudaEstiloFonteSans);
  let botaoEstiloPapyrus = document.querySelectorAll(".btn")[9];
  botaoEstiloPapyrus.addEventListener("click", mudaEstiloFontePapyrus);

  function mudaCorFundoBranco() {
    paragrafo.style.backgroundColor = "white";
    localStorage.setItem('Cor De Fundo', 'white')
  }

  function mudaCorFundoPreto() {
    paragrafo.style.backgroundColor = "black";
    localStorage.setItem('Cor De Fundo', 'black')
  }

  function mudaCorTextoBranco() {
    paragrafo.style.color = "white";
    localStorage.setItem('Cor De Texto', 'white')
  }

  function mudaCorTextoPreto() {
    paragrafo.style.color = "black";
    localStorage.setItem('Cor De Texto', 'black')
  }

  function mudaTamanhoFonte32() {
    paragrafo.style.fontSize = "32px";
    localStorage.setItem('Tamanho de Fonte', '32px')
  }

  function mudaTamanhoFonte16() {
    paragrafo.style.fontSize = "16px";
    localStorage.setItem('Tamanho de Fonte', '16px')
  }

  function mudaEspacamentoFonteNormal() {
    paragrafo.style.letterSpacing = "normal";
    localStorage.setItem('Espaçamento', 'normal')
  }

  function mudaEspacamentoFonte3() {
    paragrafo.style.letterSpacing = "3px";
    localStorage.setItem('Espaçamento', '3px')
  }

  function mudaEstiloFonteSans() {
    paragrafo.style.fontFamily = "sans-serif";
    localStorage.setItem('Estilo da Fonte', 'sans-serif')
  }

  function mudaEstiloFontePapyrus() {
    paragrafo.style.fontFamily = "monospace";
    localStorage.setItem('Estilo da Fonte', 'monospace')
  }

  paragrafo.style.backgroundColor = localStorage.getItem('Cor De Fundo');
  paragrafo.style.color = localStorage.getItem('Cor De Texto');
  paragrafo.style.fontSize = localStorage.getItem('Tamanho de Fonte');
  paragrafo.style.letterSpacing = localStorage.getItem('Espaçamento');
  paragrafo.style.fontFamily = localStorage.getItem('Estilo da Fonte');
};


