const myList = document.getElementById('items');
const addBtn = document.getElementById('addBtn');
const myItem = document.getElementById('item');

let itemArrayList = [];

const showitemsfunction = () => {console.log(itemArrayList)};


const addItem = (event) => {
    event.preventDefault()

    const newListItem = document.createElement('li');
    newListItem.innerHTML = myItem.value;
    myList.appendChild(newListItem);

    itemArrayList.push(myItem.value);
    localStorage.setItem('Name', JSON.stringify(itemArrayList));

}

addBtn.addEventListener('click', addItem);
addBtn.addEventListener('click', showitemsfunction);

