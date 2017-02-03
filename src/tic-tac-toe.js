class TicTacToe {
    constructor() {
        this.current = 'x';
        this.winner = null;
        this.count = 0;
        this.field = [];
        for(var i = 0; i < 3; i++){
            this.field[i] = [];
            for (var j = 0; j < 3; j++){
                this.field[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if(rowIndex > 2 || rowIndex < 0 || columnIndex > 2 || columnIndex < 0){
            return null;
        } else {

            if(this.field[rowIndex][columnIndex] === null){
                this.field[rowIndex][columnIndex] = this.current;
                this.count++;
            } else {
                return null;
            }

            for( var i = 0; i < 3; i++){
                if( (this.field[i][0] && this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2]) || 
                    (this.field[0][i] && this.field[0][i] === this.field[1][i] && this.field[1][i] === this.field[2][i]) || 
                    (this.field[0][0] && this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) ||
                    (this.field[0][2] && this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0]) ) {

                        this.winner = this.current;
                    }
                }

            if(this.current === 'x'){
                this.current = 'o';
            } else {
                this.current = 'x';
            }
        }
    }

    isFinished() {
        if (this.winner || this.noMoreTurns()){
            return true;
        }

        return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if (this.count === 9){
            return true;
        }
        
        return false;
    }

    isDraw() {
        if(this.noMoreTurns() && this.winner === null){
            return true;
        } 

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
         return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
