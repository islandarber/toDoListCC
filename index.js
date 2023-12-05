
const myList = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
const myItem = document.getElementById('item');
const clearBtn = document.getElementById('clearBtn');
const doneBtnLi = document.querySelector('li');
const doneBtn = document.querySelector('.doneBtn');


 const addItem = (item) => {
    // const newListItem = document.createElement('li');
    // newListItem.innerHTML = `${item} <button class="deleteBtn">Delete</button> <button class="editbtn">Edit</button>`;
    // myList.appendChild(newListItem);    
    let li = document.createElement('li');
    li.id = item.id;
    li.innerHTML = item.title;
    console.log(item.title);

    let delButton = document.createElement('button');
    delButton.className = 'delete';
    delButton.innerHTML = 'Delete';
    // delButton.addEventListener('click', handleDelete)

    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.className = 'edit';
    // editButton.addEventListener('click', handleEdit)

    li.appendChild(delButton);
    li.appendChild(editButton);
    list.appendChild(li)

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



    if(JSON.parse(localStorage.getItem('Name'))){
        itemArrayList = JSON.parse(localStorage.getItem('Name'));
    }

    let date = new Date();
    
    let newTodo = {
        id: Math.floor(Math.random() * 1000 * new Date().getMilliseconds()),
        title: myItem.value,
        isDone: false,
        date: date
    }

    

    itemArrayList.push(newTodo);

    

    localStorage.setItem('Name', JSON.stringify(itemArrayList));

    addItem(newTodo);

    myItem.value = '';
    
};


addBtn.addEventListener('click', handleListSubmit);

*/

const taskComplete = () => {
    const task = document.getElementById("taskTitle");
    task.classList.toggle("done");
    console.log(task);
}

const binBtn = document.getElementById('binIcon');
const uncheckedBtn = document.querySelector('#checkboxUncheck');
const checkBtn = document.querySelector('#checkboxCheck');



const displayToggle = () => {
    uncheckedBtn.classList.toggle('inactiveClass');
    checkBtn.classList.toggle('inactiveClass');
    console.log("checkbox working");

    const task = document.getElementById("taskTitle");
    task.classList.toggle("done");
    console.log(task);

}

uncheckedBtn.addEventListener('click', displayToggle);
checkBtn.addEventListener('click', displayToggle);


addBtn.addEventListener('click', handleListSubmit)


myList.addEventListener("click", function(e) {
    const clickedElement = e.target;
    const textDecorationValue = window.getComputedStyle(clickedElement).
    getPropertyValue('text-decoration');
    if (textDecorationValue.includes('line-through')) {
        // If line-through is present, remove it
        clickedElement.style.textDecoration = "none";
    } else {
        // If line-through is not present, add it
        clickedElement.style.textDecoration = "line-through";
        clickedElement.style.textDecorationColor = "red";
    }
});

