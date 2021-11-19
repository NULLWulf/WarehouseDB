

window.addEventListener('DOMContentLoaded',(event) =>{
    console.log('Test')
    let dataName = []
    let request = async () => {
        const response = await fetch('/getQuery');
        const data = await response.json();
        dataName = data.name;
    }

    let name = document.getElementById('name')
    name.textContent = dataName;

});