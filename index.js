
const addBtn = document.getElementById('addBtn');
const myItem = document.getElementById('item');
const clearBtn = document.getElementById('clearBtn');
const doneBtnLi = document.querySelector('li');
const doneBtn = document.querySelector('.doneBtn');
const myListDiv = document.querySelector('.myListItems');
const myCompletedItems = document.querySelector('.myCompletedItems');



const handleDelete = (e) => {

    const parentDiv = e.target.closest('.taskDiv');

    let todos = JSON.parse(localStorage.getItem("Name"))
    todos = todos.filter(element => `taskDiv${element.id}` !== parentDiv.id);
    
    // add the new array to our localstorage
    localStorage.setItem("Name", JSON.stringify(todos));

    // remove the div from the hmtl 
    parentDiv.remove()

}



 const addItem = (item) => {   
    let li = document.createElement('div');
    li.id = `taskDiv${item.id}`;
    li.setAttribute('class', `taskDiv`);
    li.innerHTML = `

    <div class="taskCheckboxDiv">
      <span id="checkboxUncheck ${item.id}" class="material-symbols-outlined checkboxUncheck" onclick='displayToggle(${item.id})'>
        radio_button_unchecked
        </span>
        <span id="checkboxCheck ${item.id}" class="inactiveClass material-symbols-outlined checkboxCheck" onclick="displayToggle(${item.id})">
          radio_button_checked
          </span>

      <h4 id="taskTitle ${item.id}">${item.title}</h4>
    </div>

      <div id="icons">
        <span id="editIcon" onclick="handleEdit(event)" class="material-symbols-outlined" >
          edit
          </span>
          <span id="binIcon" onclick="handleDelete(event)" class="material-symbols-outlined">
            delete
            </span>
            <button id="doneBtn" onclick="handleDone() class="material-symbols-outlined" style="display: none;">
            done
          </button>
      </div>
    </div>`

    myListDiv.prepend(li);

 }


 const handleEdit = (e) => {
    console.log('Edit clicked');
  
    // Access the parent div of the edit icon
    const parentDiv = e.target.closest('.taskDiv');

    console.log(parentDiv);
  
    // Check if the parentDiv is found
    if (parentDiv) {
      // Get the task title element within the parent div
      let taskTitleElement = parentDiv.querySelector('.taskCheckboxDiv');
      taskTitleElement = taskTitleElement.querySelector('h4');

      console.log(taskTitleElement);
  
      // Make the task title content editable
      taskTitleElement.contentEditable = true;
      taskTitleElement.focus();
  
      // Show the "Done" button
      const doneBtn = parentDiv.querySelector('#doneBtn');
      doneBtn.style.display = 'inline-block';
  
      // Add a blur event listener to save the changes when the user clicks outside the editable area
      taskTitleElement.addEventListener('blur', () => {
        // Save the changes and make the content not editable
        taskTitleElement.contentEditable = false;
  
        // Hide the "Done" button
        doneBtn.style.display = 'none';
      });
    }
    // Further edit logic
  }

  const handleDone = () => {
  

    // Access the parent div of the edit icon
    const parentDiv = e.target.closest('.taskDiv');
  
    // Check if the parentDiv is found
    if (parentDiv) {
      // Get the task title element within the parent div
      const taskTitleElement = parentDiv.querySelector('#taskTitle');
  
      // Make the task title content editable
      taskTitleElement.contentEditable = true;
      taskTitleElement.focus();
  
      // Show the "Done" button and hide the "Edit" button
      const editBtn = parentDiv.querySelector('#editIcon');
      const doneBtn = parentDiv.querySelector('#doneBtn');
  
      editBtn.style.display = 'none';
      doneBtn.style.display = 'inline-block';
  
      // Add a blur event listener to save the changes when the user clicks outside the editable area
      taskTitleElement.addEventListener('blur', () => {
        // Save the changes and make the content not editable
        taskTitleElement.contentEditable = false;
  
        // Show the "Edit" button and hide the "Done" button
        editBtn.style.display = 'inline-block';
        doneBtn.style.display = 'none';
      });
    }
  }


 const handleClear = () => {
    myListDiv.innerHTML = '';
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
    myCompletedItems.append(taskDiv);

}



addBtn.addEventListener('click', handleListSubmit)

