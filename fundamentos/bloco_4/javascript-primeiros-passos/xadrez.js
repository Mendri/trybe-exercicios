var peça = "Pawn";

switch (peça.toLowerCase()) {
    case "pawn":
        console.log("Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction.");
        break;
    case "knights":
        console.log("Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.");
        break;
    case "bishop":
        console.log("Bishops move diagonally any number of squares. They are unable to jump over pieces.");
        break;
    case "rooks":
        console.log("Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.");
        break;
    case "queens":
        console.log("Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.");
        break;
    case "king":
        console.log("Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.");
        break;
    default:
        console.log("Isn't a piece")
        break;
}