
/*

chess board [0,0]

7 [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7]
6 [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6]
5 [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]
4 [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4]
3 [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3]
2 [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2]
1 [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1] 
0 [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0]
    0,    1,    2,    3,    4,    5,    6,    7

    X Coordinates are on the horizontal axis
    Y Coordinates are on the vertical axis




*/

function validMoves(coords){
    let moves = [];
    let x = coords[0];
    let y = coords[1];
    // console.log("x", x, "y", y)

    // X
    if (x + 1 <= 7 && y + 2 <= 7) {
        moves.push([x+1,y+2]);
    }

    if (x + 1 <= 7 && y - 2 >= 0) {
        moves.push([x+1,y-2]);
    }
    
    if (x - 1 >= 0 && y + 2 <= 7) {
        moves.push([x-1,y+2]);
    }

    if (x - 1 >= 0 && y - 2 >= 0) {
        moves.push([x-1,y-2]);
    }

    // Y
    if (y + 1 <= 7 && x + 2 <= 7) {
        moves.push([x+2,y+1]);
    }

    if (y + 1 <= 7 && x - 2 >= 0) {
        moves.push([x-2,y+1]);
    }
    
    if (y - 1 >= 0 && x + 2 <= 7) {
        moves.push([x+2,y-1]);
    }

    if (y - 1 >= 0 && x - 2 >= 0) {
        moves.push([x-2,y-1]);
    }

    return moves
}

function moveSet() {
    let moveList = [];
    let dictMoves = {};

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            // console.log(i,j);
            moveList.push(validMoves([i,j]));
            dictMoves[`${i},${j}`] = validMoves([i,j]);
        }
    }

    return dictMoves
    // return moveList
}


function knightMoves() {

}

console.log(validMoves([0,5]))

const possibleMoves = moveSet();
console.log(possibleMoves);

console.log("7,7")