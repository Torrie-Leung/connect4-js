class Connect4 {
  constructor(selector){
    this.ROWS = 6;
    this.COLS = 7;
    this.player = 'red';
    this.selector = selector;
    // const $grid = $(selector);
    // $grid.html('hey ha');
    this.createGrid();
    this.setupEventListeners();
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
    const that = this;

    function getLastEmptyCell(col){
      const cells = $(`.col[data-col='${col}']`);
      //console.log(cells)
      for(let i = cells.length - 1; i >= 0; i--){
        const $cell = $(cells[i]);
        //console.log($cell[0].attributes)
        //console.log($cell[0].classList)
        if($cell.hasClass('empty')){
          //console.log(i,$cell[0].classList.value,$cell[0].dataset)
          return $cell;
        }
      }
      return null
      
    }

    $board.on('mouseenter','.col.empty', function () {
      //console.log('here',this)
      const col = $(this).data('col');
      // const row = $(this).data('row');
      // console.log('col:',col,' row:',row)
      const $lastEmptyCell = getLastEmptyCell(col);
      $lastEmptyCell.addClass(`next-${that.player}`);
    })

    $board.on('mouseleave','.col',function(){
      $('.col').removeClass(`next-${that.player}`);
    });

    $board.on('click','.col.empty',function(){
      const col = $(this).data('col');
      const $lastEmptyCell = getLastEmptyCell(col);
      $lastEmptyCell.removeClass(`empty next-${that.player}`);
      $lastEmptyCell.addClass(that.player);
      
      that.player = (that.player === 'red')?'black':'red'
      $(this).trigger('mouseenter');
    })
  }
}