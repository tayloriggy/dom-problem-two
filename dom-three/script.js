function addRow(baseball) {
    let tableRef = document.getElementById("baseball");
    
    let newRow = tableRef.insertRow(4);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    
    let newText = document.createTextNode("Ty Cobb");
    cell1.appendChild(newText);
   
    let newText = document.createTextNode("Detroit Tigers");
    cell2.appendChild(newText);

    let newText = document.createTextNode("Offensive Intellectual");
    cell3.appendChild(newText);
}