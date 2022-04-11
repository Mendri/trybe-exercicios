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

const nomeGeneroAutor = books.map((value) => {
  return `${value.name} - ${value.genre} - ${value.author.name}`;
});

console.log(nomeGeneroAutor);

const nameAgeOrdered = books.map((value) => {
  let objAgeName = {
    age: value.releaseYear - value.author.birthYear,
    author: value.author.name,
  };
  return objAgeName;
}).sort((a, b) => {
    return a.age - b.age;
});

console.log(nameAgeOrdered);

const scienceFictionOrFantasy = books.filter((value) => {
    if (value.genre === 'Fantasia' || value.genre === 'Ficção Científica') {
        return value;
    }
})

console.log(scienceFictionOrFantasy);

const sixtyYearsOrdered = books.filter((value) => {
    if (2022 - value.releaseYear > 60) {
        return value;
    }
}).sort((a, b) => {
    return a.releaseYear - b.releaseYear
})

console.log(sixtyYearsOrdered);

const scienceFictionOrFantasyAuthors = scienceFictionOrFantasy.map((value) => {
    return value.author.name
});

console.log(scienceFictionOrFantasyAuthors);

const sixtyYearsBooksName = sixtyYearsOrdered.map((value) => {
    return value.name
});

console.log(sixtyYearsBooksName);

const authorWith3DotsOnName = books.filter((value) => {
    if (value.author.name === "J. R. R. Tolkien") {
        return value.name
    }
})

console.log(authorWith3DotsOnName);