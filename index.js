
const addBtn = document.getElementById('addBtn');
const myItem = document.getElementById('item');
const clearBtn = document.getElementById('clearBtn');
const doneBtnLi = document.querySelector('li');
const doneBtn = document.querySelector('.doneBtn');
const myListDiv = document.querySelector('.myListItems');


const handleDelete = (e) => {

    const parentDiv = e.target.closest('.taskDiv');
    let todos = JSON.parse(localStorage.getItem("Name"))
    todos = todos.filter(element => element.id !== Number(parentDiv.id))
    // add the new array to our localstorage
    localStorage.setItem("Name", JSON.stringify(todos))

    // remove the div from the hmtl 
    parentDiv.remove()

}



 const addItem = (item) => {   
    let li = document.createElement('div');
    li.id = item.id;
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


    myListDiv.appendChild(li)

 }


 const handleEdit = (e) => {
    console.log('Edit clicked');
  
    // Access the parent div of the edit icon
    const parentDiv = e.target.closest('.taskDiv');
  
    // Check if the parentDiv is found
    if (parentDiv) {
      // Get the task title element within the parent div
      const taskTitleElement = parentDiv.querySelector('#taskTitle');
  
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

