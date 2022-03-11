let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info.recorrente = 'Sim';

let otherinfo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain',
    nota: 'Dells Four Color Comics #178',
    recorrente: 'Sim'
}


for (let key in info) {
  if(
    key === 'recorrente' && 
    info[key] === 'Sim' &&
    info[key] === 'Sim'
  ) {
    info.recorrente = 'Ambos'
    otherinfo.recorrente = 'recorrentes'
    console.log(console.log(info[key]+ " "+ otherinfo[key]))
  } else {
    console.log(info[key]+ " "+ otherinfo[key])
  }
}

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
  ],
};

console.log(leitor.nome  + leitor.sobrenome + " tem 2 livros favoritos que se chamam " + leitor.livrosFavoritos[0].titulo + " e " + leitor.livrosFavoritos[1].titulo)