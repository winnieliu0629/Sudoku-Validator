# Project - Sudoku

Sudoku is a logic puzzle played on a 9x9 grid subdivided into 9 3x3 subgrids. The player is presented a partially filled puzzle, and must complete it following these rules:

1. Each column must contain the numbers 1-9 (no repeats!)
2. Each row must contain the numbers 1-9 (no repeats!)
3. Each 3x3 subgrid must contain the numbers 1-9 (no repeats!)

If you've never played sudoku before, try an ["easy" puzzle from the New York Times' puzzle section](https://www.nytimes.com/puzzles/sudoku/easy).

## GOAL
 The ultimate goal of this project is to create a "sudoku checker". The sudoku checker will be a function that accepts a single sudoku grid (represented by an array of arrays) and returns **true** if the grid follows the rules above and **false** if not.

## APPROACH
 Your final sudoku checker function will be relatively complex. To build it, we're going to write several simple functions that combine to perform a larger complex operation. The concept of building complicated functions by combining simple ones is referred to as [function composition](https://en.wikipedia.org/wiki/Function_composition_/(computer_science/)).

 We know that our final function will need to check whether a given grid follows the three rules above. This provides an excellent "separation of concerns".

## SEPARATION OF CONCERNS
 [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) is another programming design principle, which states that a program should be split into distinct sections, such that each section addresses a separate concern.

 There are several benefits to writing code with good separation of concerns. First, your code becomes more expressive. When describing the problem of sudoku in plain English, we split the puzzle into three rules. By mirroring that organization, your code becomes easier for you and other developers to interpret.

 Second, separation of concerns leads to [modular](https://en.wikipedia.org/wiki/Separation_of_concerns) code. With modular code, individual sections can be re-used easily. So if we were tasked with solving a similar problem (such as writing a checker for the sudoku-variant [nonomino](https://en.wikipedia.org/wiki/Nonomino)) we could quickly and easily develop a solution by reusing the code we've already written.

 Modular code also allows you to improve or modify one section of code without having to know (or change) the details of other sections. This benefit, and the others listed, will become clearer as you write more, increasingly complex code.

## GETTING STARTED
 To start, using an empty CodePen or repl.it, write the following functions:

 1. `getRow`: This function should accept two arguments: a sudoku grid (represented by an array of arrays) and a row index. The function should return an array containing the numbers in the specified row.

 2. `getColumn`: This function should accept a sudoku grid and a column index. The function should return an array containing the numbers in the specified column.

 3. `getSection`: This function should accept three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. The function should return an array with all the numbers in the specified subgrid.

 Remember that our puzzle is broken into 9 subgrids. In our coordinate system, (0,0) will represent the subgrid in the upper left, (1,0) will represent the upper-middle and so on.

 See examples below:

```
 let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
               [ 2,7,1,   9,6,3,   4,8,5 ],
               [ 4,6,3,   5,8,1,   7,9,2 ],
 
               [ 9,3,4,   6,1,7,   2,5,8 ],
               [ 5,1,7,   2,3,8,   9,6,4 ],
               [ 6,8,2,   4,5,9,   3,7,1 ],
  
               [ 1,5,9,   8,7,4,   6,2,3 ],
               [ 7,4,6,   3,2,5,   8,1,9 ],
               [ 3,2,8,   1,9,6,   5,4,7 ]];


 getRow(puzzle, 8);
 // -> [ 3,2,8,1,9,6,5,4,7 ]

 getRow(puzzle, 0);
 // -> [ 8,9,5,7,4,2,1,3,6 ]

 getColumn(puzzle, 0);
 // -> [ 8,2,4,9,5,6,1,7,3 ]

 getColumn(puzzle, 8);
 // -> [ 6,5,2,8,4,1,3,9,7 ]

 getSection(puzzle, 0, 0);
 // -> [ 8,9,5,2,7,1,4,6,3 ]
 
 // This grabs the values from column 0 and row 1 (second from the top left)
 getSection(puzzle, 0,1);
 // -> [ 7,4,2,9,6,3,5,8,1 ]
 ```

 We now have functions that accept a sudoku grid and return specific subsections (row, column, or subgrid).

 Now we need to write a function that will accept a subsection and check that it includes the numbers 1-9 (with no repeats). Write a function includes1to9 that accomplishes this.

```
includes1to9([1,2,3,4,5,6,7,8,9]) // => true
includes1to9([1,1,2,3,4,5,6,7,8]) // => false (no 9)
```

 With that function, you have all the parts you need to write your sudoku checker function.

```
let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(puzzle);
// => true

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(p8zzle);
// => false
```

Bonus: Write a function isSame that takes two sudoku puzzles as parameters and returns a boolean indicating whether they are identical puzzles.

```
let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
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

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

isSame(puzzle, p8zzle);
// => false

isSame(puzzle, puzzleCopy);
// => true
```