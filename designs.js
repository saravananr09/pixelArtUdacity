(function() {
  'use strict';

  
  const $colorPicker = document.getElementById("colorPicker");
  const $sizePicker = document.getElementById("sizePicker");
  const $table = document.getElementById("pixel_canvas");

  
  $sizePicker.addEventListener('submit', function() {
    
    event.preventDefault();

    
    let width = document.getElementById("input_width").value;
    let height = document.getElementById("input_height").value;
    makeGrid(width, height);
  })

  
  function makeGrid(width, height) {
    $table.innerHTML = '';
    for (let row = 0; row < width; row++) {
      let newRow = $table.insertRow();
        for (let cell= 0; cell < height; cell++ ) {
         
          let newCell = newRow.insertCell();
          newCell.onclick = changeColor;
        //  let oldCell = newCell.onclick(preventDefault); 
        }
    }
  }

  
  function changeColor() {
    this.style.background = $colorPicker.value;
  }

})();
