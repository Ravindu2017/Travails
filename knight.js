
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


class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    isEmpty() {
        return Object.keys(this.items).length == 0;
    }
    get printQueue() {
        return this.items;
    }
}

// function levelOrder(root) {
//     if (!root) return
//     let fifo = new Queue;
//     let visited = [];
//     fifo.enqueue(root);
//     while(fifo.isEmpty() !== true) {
//         let node = fifo.peek();
//         console.log(node.data, "level order");
//         if (node.left != null) {
//             fifo.enqueue(node.left)
//         }
//         if (node.right != null) {
//             fifo.enqueue(node.right)
//         }
//         fifo.dequeue();
//         // coolDown = coolDown - 1;
//     }
// }

// function levelOrder(graph, start, end) {
//     if (!start) return
//     let queue = new Queue;
//     let visited = new Array(graph.length).fill(false);
//     queue.enqueue(start);
//     // let visited = [];
//     // visited.push(start);
//     // let cooldown = 10;

//     // while(queue && cooldown > 0) {
//     while(queue.isEmpty() !== true) {
//         s = queue.dequeue();
//         values = graph[s];
//         // console.log(s, "s", values);

//         for (const n of values) {
//             if (!visited[n]) {
//                 // console.log(n)
//                 // visited.push(n);
//                 visited[n] = true;
//                 queue.enqueue(n);
//             }

//             if (visited[end] == true) {
//                 console.log("found it", queue.items);
//             }
//         }

//     }

//     // console.log(visited, visited[0]);

//     // return queue
//     return visited

//     // while(queue.isEmpty() !== true && cooldown > 0) {
//     //     let node = queue.peek();
//     //     console.log(node, "level order");
//     //     visited.push(node);
//     //     if (moveList[node] !== null) {
//     //         queue.enqueue(moveList[node][0])
//     //     }
//     //     queue.dequeue();
//     //     // cooldown--;
//     // }
// }

function levelOrder(graph, start, end) {
    if (!start) return
    let queue = new Queue;
    let visited = new Array(graph.length).fill(null);
    visited[start] = -1;
    queue.enqueue(start);
    let off = true;

    while(queue.isEmpty() !== true && off == true) {
        let current = queue.dequeue();
        let values = graph[current];

        for (const n of values) {
            // if (visited[end] == true) {
            //     console.log("found it", queue.items);
            //     off = false;
            //     break
            // }

            if (visited[n] === null) {
                visited[n] = current;
                queue.enqueue(n);
            }

            if (n === end) {
                off = false;
                break;
            }
        }
    }

    return visited

}

function knightMoves() {

}

// console.log(validMoves([0,5]))

const possibleMoves = moveSet();
// console.log(possibleMoves);

// console.log("7,7")

// levelOrder('3,3', '5,5', possibleMoves);

let testSet = new Array(possibleMoves.length).fill(false);


// KEYS
// console.log(testSet, Object.keys(possibleMoves));

let check = '3,3'
if (possibleMoves[check] === true) {
    console.log("yes")
}

// console.log(possibleMoves[check], possibleMoves[check].length > 0 , check, "check")

let result = levelOrder(possibleMoves, '3,3', '5,5');
console.log(result)
console.log(possibleMoves[check])
// console.log(result['7,7']);
// for (const n in possibleMoves[check]) {
//     console.log(possibleMoves[check][n], check)
// }