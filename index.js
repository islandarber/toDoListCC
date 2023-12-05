
const myList = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
const myItem = document.getElementById('item');
const clearBtn = document.getElementById('clearBtn');
const doneBtnLi = document.querySelector('li');
const doneBtn = document.querySelector('.doneBtn');
const myListDiv = document.querySelector('.myListItems');

 const addItem = (item) => {
    // const newListItem = document.createElement('li');
    // newListItem.innerHTML = `${item} <button class="deleteBtn">Delete</button> <button class="editbtn">Edit</button>`;
    // myList.appendChild(newListItem);    
    let li = document.createElement('div');
    console.log(li);
    li.id = item.id;
    // li.innerHTML = item.title;
    li.innerHTML = `
    <div class="taskDiv">

    <div class="taskCheckboxDiv">
      <span id="checkboxUncheck" class="material-symbols-outlined">
        radio_button_unchecked
        </span>
        <span id="checkboxCheck" class="inactiveClass material-symbols-outlined">
          radio_button_checked
          </span>

      <h4 id="taskTitle">${item.title}</h4>
    </div>

      <div id="icons">
        <span id="editIcon" class="material-symbols-outlined">
          edit
          </span>
          <span id="binIcon" class="material-symbols-outlined">
            delete
            </span>
      </div>
    </div>`


    myListDiv.appendChild(li)

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

