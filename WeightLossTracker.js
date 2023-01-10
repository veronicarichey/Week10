let id = 0;

document.getElementById('add').addEventListener('click', () => {

    let table= document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('date').value;
    row.insertCell(1).innerHTML = document.getElementById('current-weight').value;
    row.insertCell(2).innerHTML = document.getElementById('pounds-lost').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));  
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}