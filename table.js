function drawTable() {
    var rows = document.getElementById('rows').value;
    var cols = document.getElementById('cols').value;
    var tableContainer = document.getElementById('tableContainer');

    // Clear the container
    tableContainer.innerHTML = '';

    var table = document.createElement('table');
    for (var i = 1; i <= rows; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= cols; j++) {
            var td = document.createElement('td');
            td.textContent = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
}