/*

Implemented October 30th
By Jowy Curameng

*/
function addRow() {
         
    var TakenClass = document.getElementById("name");
    var table = document.getElementById("majorclassestable");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    
    //CASES SEARCH THROUGH ARRAY
    row.insertCell(1).innerHTML= TakenClass.value;

}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("majorclassestable");
    table.deleteRow(index);
   
}

function load() {
   
    console.log("Page load finished");

}
