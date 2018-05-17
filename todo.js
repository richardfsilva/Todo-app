var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('search');

form.addEventListener('submit', addItems);
itemList.addEventListener('click', removeItems);
filter.addEventListener('keyup', filterItems);

function addItems(e) {
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    //Create delete button
    var del = document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';

    del.appendChild(document.createTextNode('X'));

    li.appendChild(del);

    itemList.appendChild(li);

}

function removeItems(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}