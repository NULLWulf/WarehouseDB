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
        buildOrderCustTable1(query.data)

    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

});
function buildOrderCustTable1(data){
    var table = document.getElementById('myTable1')
    for (var i = 0; i < data.length; i++){
        var row = `
    <tr>
            <td>${data[i].FirstName} </td>
            <td>${data[i].LastName} </td>
            <td>${data[i].Position} </td>
            <td>${data[i].Salary} </td>
            <td>${data[i].Zone} </td>
    </tr> `
        table.innerHTML += row
    }
}
document.getElementById('fetchAssigned').addEventListener('click', function(){
    fetch('/query3').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        console.log(query);
        buildOrderCustTable2(query.data)


    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    })

});
function buildOrderCustTable2(data){
    var table = document.getElementById('myTable2')
    for (var i = 0; i < data.length; i++){
        var row = `
    <tr>
              <td>${data[i].Zone} </td>
              <td>${data[i].Assigned_Employees} </td>
    </tr> `
        table.innerHTML += row
    }
}
document.getElementById('fetchInventory').addEventListener('click', function(){
    fetch('/query4').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        console.log(query);
        buildOrderCustTable3(query.data)
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

});
function buildOrderCustTable3(data){
    var table = document.getElementById('myTable3')
    for (var i = 0; i < data.length; i++){
        var row = `
    <tr>
          <td>${data[i].ItemType} </td>
          <td>${data[i].Distint_Items_Of_Time} </td>
    </tr> `
        table.innerHTML += row
    }
}
// Placeholder for query 5
document.getElementById('fetchCustomerOrders').addEventListener('click', function(){
    fetch('/query5').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        console.log(query);
        buildOrderCustTable4(query.data)
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

});
function buildOrderCustTable4(data){
    var table = document.getElementById('myTable4')
    for (var i = 0; i < data.length; i++){
        var row = `
    <tr>
          <td>${data[i].CustomerID} </td>
          <td>${data[i].Companyname} </td>
          <td>${data[i].OrderID} </td>
          <td>${data[i].ShipDate} </td>
    </tr> `
        table.innerHTML += row
    }
}
