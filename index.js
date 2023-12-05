
const myList = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
const myItem = document.getElementById('item');
const clearBtn = document.getElementById('clearBtn');
const doneBtnLi = document.querySelector('li');
const doneBtn = document.querySelector('.doneBtn');
const myListDiv = document.querySelector('.myListItems');


 const addItem = (item) => {
    let li = document.createElement('div');
    console.log(li);
    li.classList.add('taskDiv');
    li.id = `taskDiv${item.id}`;
    li.innerHTML = `

    <div class="taskCheckboxDiv">
      <span id="checkboxUncheck ${item.id}" class="material-symbols-outlined" onclick='displayToggle(${item.id})'>
        radio_button_unchecked
        </span>
        <span id="checkboxCheck ${item.id}" class="inactiveClass material-symbols-outlined" onclick="displayToggle(${item.id})">
          radio_button_checked
          </span>

      <h4 id="taskTitle ${item.id}">${item.title}</h4>
    </div>

    <div id="icons">
        <span id="editIcon" class="material-symbols-outlined">
            edit
        </span>
        <span id="binIcon" class="material-symbols-outlined">
            delete
        </span>
    </div>`;

    myListDiv.prepend(li);

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


const displayToggle = (idNum) => {

    // GETTING THE TWO BUTTONS
    const uncheckedBtn = document.getElementById(`checkboxUncheck ${idNum}`);
    const checkBtn = document.getElementById(`checkboxCheck ${idNum}`);

    // EXCHANGING INACTIVE CLASS BETWEEN THE TWO BUTTONS
    uncheckedBtn.classList.toggle('inactiveClass');
    checkBtn.classList.toggle('inactiveClass');

    // ADDING THE STRIKETHROUGH CLASS
    const task = document.getElementById(`taskTitle ${idNum}`);
    task.classList.toggle("done");

    const taskDiv = document.getElementById(`taskDiv${idNum}`);
    console.log(taskDiv);``

    myListDiv.removeChild(taskDiv);
    myListDiv.append(taskDiv);

}



addBtn.addEventListener('click', handleListSubmit)

