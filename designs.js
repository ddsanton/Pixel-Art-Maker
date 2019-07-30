// Vreate variable
let inputWidth, inputHeight, row, column, tableCanvas;

// 1. create event listeners.
const sizePicker = document.getElementById("sizePicker");
inputHeight = document.getElementById("inputHeight");
inputWidth = document.getElementById("inputWidth");
tableCanvas = document.getElementById("pixelCanvas");

// 2. Create Grid
function makeGrid() {
   row = inputHeight.value;
   column = inputWidth.value;

//  Delete all previous child elements.
// Clear the Canvas before creating new one
while (tableCanvas.firstChild) {
    tableCanvas.removeChild(tableCanvas.firstChild);
}
// 3. create new cell and insert it in to create the table
for ( let r = 0; r< row; r++){
  var newRow = document.createElement("tr");
  tableCanvas.appendChild(newRow);
    for (let c=0; c<column; c++){
      var newCell = document.createElement("td");
        newRow.appendChild(newCell);
        //add functionality of coloring the cell.
        let counter = 0;
        // every cell get a listener
        newCell.addEventListener("click", function colorCell(click){
        // first click colors the cell, second click returns background to white
        if (counter % 2 === 0){
           let pickedColor = document.getElementById("colorPicker").value;
           // color the cell
          let clickedCell = click.target;
          clickedCell.style.backgroundColor = pickedColor;
        }  else {
            let clickedCell = click.target;
            clickedCell.style.backgroundColor="white";
        }
        counter ++;
    });
   }
  }
};



sizePicker.addEventListener("submit", function(event) {
event.preventDefault();
makeGrid()
});
