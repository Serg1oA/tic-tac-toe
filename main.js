// The game object will control the start and end of each game
let game = {
    gameStart() {

    },
    gameEnd() {

    },

}

// The board object will hold the game logic, including checking and declaring winners
let board = {
    boardReset() {
        // TBD
    },

    // These winningLines can be 
    winningLines: [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ],

    checkWinner(p1, p2) {
        for (line of winningLines) {
            // p1/2 wins if every number of a winning line is present in the p1/2's owned squares
            if (line.every(num => p1.ownedSquares.includes(num))) {
                this.declareWinner(p1)
            } else if (line.every(num => p2.ownedSquares.includes(num))) {
                this.declareWinner(p2)
            }
        }
    },

    declareWinner(winner) {
        // TBD
    }
}

class Player {
    constructor(name, symbol, score) {
        this.name = name;
        this.symbol = symbol;
        this.score = score;
        this.ownedSquares = []
    }
    
}