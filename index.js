
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

        let taskTitleInnerText = taskTitleElement.innerText;

        console.log(taskTitleElement);
        console.log(taskTitleInnerText);
        console.log(parentDiv.id)

        // Make the task title content editable
        taskTitleElement.contentEditable = true;

        const textLength = taskTitleElement.textContent.length;
        console.log(textLength);

        // Sets cursor to end of text
        taskTitleElement.focus();

        taskTitleElement.focus();
        window.getSelection().selectAllChildren(taskTitleElement)
        window.getSelection().collapseToEnd()

        // Add a blur event listener to save the changes when the user clicks outside the editable area
        taskTitleElement.addEventListener('blur', () => {
        // Save the changes and make the content not editable
            taskTitleElement.contentEditable = false;

            let editedTasks = JSON.parse(localStorage.getItem("Name"));
            let idString = parentDiv.id;
            let finalEditString = idString.slice(7);
        
            // Find the index of the edited task in the array
            let editedTaskIndex = editedTasks.findIndex((element) => element.id == finalEditString);
    
            if (editedTaskIndex !== -1) {
                // Update the title of the task at the found index
                editedTasks[editedTaskIndex].title = taskTitleElement.textContent;
    
                // Update the entire array in local storage
                localStorage.setItem("Name", JSON.stringify(editedTasks));
            }
        });

        taskTitleElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                taskTitleElement.contentEditable = false;
        
                let editedTasks = JSON.parse(localStorage.getItem("Name"));
                let idString = parentDiv.id;
                let finalEditString = idString.slice(7);
        
                // Find the index of the edited task in the array
                let editedTaskIndex = editedTasks.findIndex((element) => element.id == finalEditString);
        
                if (editedTaskIndex !== -1) {
                    // Update the title of the task at the found index
                    editedTasks[editedTaskIndex].title = taskTitleElement.textContent;
        
                    // Update the entire array in local storage
                    localStorage.setItem("Name", JSON.stringify(editedTasks));
                };
            };
        });
    };
};

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
    console.log(taskDiv);

    let completedTasks = JSON.parse(localStorage.getItem("Name"))
    completedTasks = completedTasks.filter(element => `taskDiv${element.id}` !=idNum);
    console.log(completedTasks);

    const finalArray = completedTasks.find((element) => element.id == idNum);

    if(!finalArray.isDone){
        console.log('running the IF');
        finalArray.isDone = true;
        myListDiv.removeChild(taskDiv);
        myCompletedItems.append(taskDiv);
    
    } else if (finalArray.isDone){
        console.log('running the ELSE');
        finalArray.isDone = false;
        myCompletedItems.removeChild(taskDiv);
        myListDiv.append(taskDiv);
    } 

    localStorage.setItem("Name", JSON.stringify(completedTasks));

}

addBtn.addEventListener('click', handleListSubmit);


// Sorting Tasks when the page loads

const pageLoadSort = () => {

    const locallyStoredItems = JSON.parse(localStorage.getItem('Name'));
    let isDone = document.querySelectorAll('.taskDiv');

    if (locallyStoredItems == null){
        console.log('No items in local storage');
    } else {
        locallyStoredItems.forEach(element => {
            console.log(element);
            if (element.isDone == true){
                isDone.forEach(e => {
                    e = e.id.toString().slice(7);
                    if (e == element.id && element.isDone == true){
                        console.log(e);
                        let completedDiv = document.getElementById(`taskDiv${e}`);
                        myListDiv.removeChild(completedDiv);
                        myCompletedItems.append(completedDiv);

                        const task = document.getElementById(`taskTitle ${e}`);
                        task.classList.toggle('done');
                        

                        const uncheckedBtn = document.getElementById(`checkboxUncheck ${e}`);
                        const checkBtn = document.getElementById(`checkboxCheck ${e}`);
                    
                        // EXCHANGING INACTIVE CLASS BETWEEN THE TWO BUTTONS
                        uncheckedBtn.classList.toggle('inactiveClass');
                        checkBtn.classList.toggle('inactiveClass');
                    };
                });
            };
        });
    };
};

window.addEventListener('load', pageLoadSort);
