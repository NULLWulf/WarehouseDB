document.getElementById('fetchOrders').addEventListener('click', function(){
    fetch('/query1').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        initialize(query);
        console.log(query);
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

});

document.getElementById('fetchEmployees').addEventListener('click', function(){
    fetch('/query2').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        initialize(query);
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
        initialize(query);
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
        initialize(query);
        console.log(query);
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

});

// Placeholder for query 5
document.getElementById('fetchInventory').addEventListener('click', function(){
    fetch('/query5').then(function(response) {
        return response.json();
    }).then(function(json) {
        let query = json;
        initialize(query);
        console.log(query);
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

});

