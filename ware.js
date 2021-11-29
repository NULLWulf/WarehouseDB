document.addEventListener('DOMContentLoaded', function () {
  fetch('vincentprivatenas.mynetgear.com')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));


});
/* this is for whe you press the button it should display the table*/
document.getElementById('fetchOrders').addEventListener('click', loadHTMLTable);

/* this is where the query data will get stored after grabbing from json going to have to repeat for each table i think--> */
function fetchWareData(){
  fetch(/*"this should be where the query goes"*/)
  .then(response => response.json())
  .then(query1 =>cosole.log(query1));
}

/* not sure about using this still yet */
function loadHTMLTable(data) {
    const table = document.querySelector('table-bodya');
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
return;
    }
    let tableHtml = "";
});
}
