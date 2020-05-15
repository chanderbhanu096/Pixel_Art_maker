//Fetching Html Form Butoon into Javascript using Dom
const SUbmitBtn = document.getElementById("submitBtn");
const table = document.getElementById("pixelCanvas");
const color = document.getElementById("#colorPicker")

// Select color input
// Select size input

// When size is submitted by the user, call makeGsrid()


$('#sizePicker').submit(function(event) {
    event.preventDefault();
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    makeGrid(height, width);


})

function makeGrid(a, b) {
    $('tr').remove();

    for (var i = 1; i <= a; i++) {
        let row = table.insertRow();
        for (var j = 1; j <= b; j++) {
            row.insertCell();
            let cell = row.insertCell();
            cell.addEventListener('click', (e) => {

                cell.style.background = color.value;


            })
        }
    }
}