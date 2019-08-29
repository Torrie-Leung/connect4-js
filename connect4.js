class Connect4 {
  constructor(selector){
    this.ROWS = 6;
    this.COLS = 7;
    this.selector = selector
    // const $grid = $(selector);
    // $grid.html('hey ha');
    this.createGrid();
  }

  createGrid(){
    const $board = $(this.selector);
    console.log($board)
  }
}