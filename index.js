const myList = document.getElementById('items');
const addBtn = document.getElementById('addBtn');
const myItem = document.getElementById('item');
const clearBtn = document.getElementById('clearBtn');


 const addItem = (item) => {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = item;
    myList.appendChild(newListItem);    
 }

 const handleClear = () => {
    myList.innerHTML = '';
    localStorage.removeItem('Name')    
 }

 clearBtn.addEventListener('click', handleClear)

 if (localStorage.getItem('Name')) {
    itemArrayList = JSON.parse(localStorage.getItem('Name'));
    itemArrayList.forEach((item) => {
        addItem(item);
    })
}

const handleListSubmit = (event) => {
    event.preventDefault()
    let itemArrayList = [];
    // let itemArrayList = ["string", "another string"];
    // let itemArrayList = [
        // {
        //     id: 13651648453463,
        //     title:"string",
        //     done: true
        // },
        // {
        //     id: 16315468453463,
        //     title:"another string",
        //     done: false
        // }
    // ];

    console.log(JSON.parse(localStorage.getItem('Name')))
    if(JSON.parse(localStorage.getItem('Name'))){
        console.log("working")
        itemArrayList = JSON.parse(localStorage.getItem('Name'));
    }

    itemArrayList.push(myItem.value);

    localStorage.setItem('Name', JSON.stringify(itemArrayList));

    addItem(myItem.value)

    myItem.value = '';
    
};

addBtn.addEventListener('click', handleListSubmit)
