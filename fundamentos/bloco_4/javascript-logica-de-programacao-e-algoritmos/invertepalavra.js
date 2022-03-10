let word = "tryber";
let drow = "";

for (let i = 0; i < word.length; i += 1) {
    drow += word[word.length - 1 - i];   
}

console.log(drow)