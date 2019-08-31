class Connect4 {
  constructor(selector){
    this.ROWS = 6;
    this.COLS = 7;
    this.selector = selector
    // const $grid = $(selector);
    // $grid.html('hey ha');
    this.createGrid();
    this.setupEventListeners()
  }

  createGrid(){
    const $board = $(this.selector);
    //console.log($board);
    for(let row = 0; row< this.ROWS; row++){
      const $row = $('<div>')
        .addClass('row');
      for(let col = 0; col< this.COLS; col++){
        const $col = $('<div>')
          .addClass('col empty')
          .attr('data-col',col)
          .attr('data-row',row);
          $row.append($col);
      }
      $board.append($row);
      
    }
    //console.log($board.html());
  }
  setupEventListeners(){
    const $board = $(this.selector);
    $board.on('mouseenter','.col.empty', function () {
      console.log('here',this)
    })
  }
}