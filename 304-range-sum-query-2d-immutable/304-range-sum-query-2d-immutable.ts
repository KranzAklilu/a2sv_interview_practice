class NumMatrix {
     matrix: number[][] = [[]]
    constructor(matrix: number[][]) {
        this.matrix = matrix
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let answer = 0;
        let rowCount = row1;
            while(rowCount >= row1 && rowCount <= row2){
                let colCount = col1;
                while(colCount >= col1 && colCount <= col2){
                    answer += this.matrix[rowCount][colCount];
                    colCount++
                }
            rowCount++;
            }
        return answer
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */