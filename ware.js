document.addEventListener('DOMContentLoaded', function () {
  fetch('vincentprivatenas.mynetgear.com')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
  

});



function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
return;
    }
    let tableHtml = "";
data.forEach(function(EmplyeeID, LastName, Position)){
  tableHtml += "<tr>";
  tableHtml += `<td>${EmployeeID}</td>`;
  tableHtml += `<td>${LastName}</td>`;
  tableHtml += `<td>${Position}</td>`;
  tableHtml += "</tr>";
});
table.innerHTML = tableHtml;

}
