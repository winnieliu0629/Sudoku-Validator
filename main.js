let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];


//return specific subsections

function getRow(grid,numRows){
    return grid[numRows];
}

function getColumn(grid,numColumns){
    let column = [];
    for (let i = 0; i < grid.length; i++){
      let row = grid[i];
      column.push(row[numColumns])
    }
    return column;
}

function getSection(grid,numColumns,numRows){
    let subGrid = [];
    let newGrid = [];
    for(let i = (numRows * 3); i < (numRows * 3 + 3); i++){
        let row = grid[i];
        let column = [];
        subGrid.push(row.slice(numColumns * 3, numColumns * 3 + 3));
    }
    for(let num of subGrid){
        for(let index of num){
        newGrid.push(index)
        } 
    }
    return newGrid;
}


// sudoku checker function

function includes1to9(arr){
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(i) === -1) {
            return false
        }
        return true
}

function sudokuIsValid(grid){
    for(let i = 0; i < grid.length; i++){
        if(!includes1to9(getRow(grid, i)) || !includes1to9(getColumn(grid, i)) || !includes1to9(getSection(grid, Math.floor(i/3), Math.floor(i/3)))){
            return false
        }
    }
    return true
}

function isSame(grid1, grid2){
    for(let i = 0; i < grid1.length; i++){
        let row = grid1[i];
        for (let j = 0; j < row.length; j++){
            if (grid1[i][j] !== grid2[i][j]){
            return false
        }
        }
    }
    return true
}