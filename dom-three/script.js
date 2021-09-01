function addRow() {
    let table = document.getElementById("baseball");
    
    let row = table.insertRow(4);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    cell1.innerHTML = "Ty Cobb";
    cell2.innerHTML = "Detroit Tigers";
    cell3.innerHTML = "Offensive Prowess";
}