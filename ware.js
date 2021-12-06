document.getElementById('fetchOrders').addEventListener('click', function(){
    fetch('/query1').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        console.log(query);
        buildOrderCustTable(query.data)

    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });
});

function buildOrderCustTable(data){
    var table = document.getElementById('myTable')
    for (var i = 0; i < data.length; i++){
        var row = `
    <tr>
             <td>${data[i].OrderID} </td>
             <td>${data[i].CustomerID} </td>
             <td>${data[i].RouteName} </td>
             <td>${data[i].Region} </td>
    </tr> `
        table.innerHTML += row
    }
}

document.getElementById('fetchEmployees').addEventListener('click', function(){
    fetch('/query2').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        console.log(query);

    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

});

document.getElementById('fetchAssigned').addEventListener('click', function(){
    fetch('/query3').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        console.log(query);
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    })

});

document.getElementById('fetchInventory').addEventListener('click', function(){
    fetch('/query4').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        console.log(query);
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

});

// Placeholder for query 5
document.getElementById('fetchCustomerOrders').addEventListener('click', function(){
    fetch('/query5').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        console.log(query);
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

});

