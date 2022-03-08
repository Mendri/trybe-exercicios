const a = 54;
const b = 51;
const c = 53;

if (a > b && a > c) {
    console.log("A constante a é maior que as constantes b e c, pois "+a+" é maior que "+b+" e "+c)
} else if (b > a && b > c) {
    console.log("A constante b é maior que as constantes a e c, pois "+b+" é maior que "+a+" e "+c)
} else if (c > a && c > b) {
    console.log("A constante c é maior que as constantes a e b, pois "+c+" é maior que "+a+" e "+b)
} else if (a === b && b === c && c === a) {
    console.log("Todas as constantes possuiem o mesmo valor")
}