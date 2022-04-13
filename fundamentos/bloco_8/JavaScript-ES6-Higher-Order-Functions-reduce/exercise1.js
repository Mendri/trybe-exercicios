const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const flatten = arrays.reduce((acc, val) => acc.concat(val), []);

console.log(flatten);

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const names = books.reduce((acc, book, index) => {
  if (index === books.length - 1) {
    return `${acc} ${book.author.name}.`
  };
  return `${acc} ${book.author.name},`;
}, "");

console.log(names);

const avarageAge = books.reduce((acc, book, index) => {
  acc += book.releaseYear - book.author.birthYear;
  if (index === books.length -1) {
    return acc / books.length;
  }
  return acc;
}, 0);

console.log(avarageAge);

const longestNamedBook = books.reduce((acc, book) => {
  if (acc.name.length > book.name.length) {
    return acc;
  }
  return book;
});

console.log(longestNamedBook);

const arrayNames = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const letterA = arrayNames.reduce((acc, name) => {
  for (let i = 0; i < name.length; i += 1) {
    if (name[i].toLocaleUpperCase() === 'A') {
      acc += 1;
    }
  }
  return acc;
}, 0);

console.log(letterA);

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {

}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];