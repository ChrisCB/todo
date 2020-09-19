// To Do App

const form = document.getElementById('form');

const formButton = document.querySelector('.formButton');
const listDiv = document.getElementById('listDiv');

let taskNum = 0;

function displayText() {
  taskNum += 1;
  const taskValue = document.getElementById('task').value; // Get text from the form
  const newTask = document.createElement('div'); // Create a div for the new task
  newTask.id = taskNum; // Give the new div a unique ID
  newTask.className = 'toDoItem'; // Give the new div a class of toDoItems

  listDiv.appendChild(newTask);

  const taskVal = `${taskNum}. ${taskValue}`; // Create the to do item text
  localStorage.setItem(taskNum, taskValue); // Save
  newTask.innerHTML += taskVal;

  // Add a delete button
  const newDelete = document.createElement('BUTTON'); // Create a <button> element
  newDelete.innerHTML = 'Done'; // Insert 'Done' text
  newDelete.className = 'done'; // Class name 'done'
  document.getElementById(taskNum).appendChild(newDelete); // Insert the button

  // Delete
  const doneButton = document.querySelectorAll('.done');

  function deleteItem() {
    const taskDiv = this.parentElement;
    taskDiv.classList.toggle('taskDone');
  }

  // Event listener on delete buttons
  for (let i = 0; i < doneButton.length; i++) {
    doneButton[i].addEventListener('click', deleteItem, false);
  }
  // Reset form value

  form.reset(); // Reset all form data
}

// Event listener on form button
formButton.addEventListener('click', displayText);

// STORE LIST

// Retrieve
// document.getElementById('listDiv').innerHTML = localStorage.getItem(
//   'savedTask'
// );
