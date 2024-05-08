// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
// Get reference to Save button on Add Task Modal Dialog
const saveTaskButtonEl = $('#add-tasks');

// Todo: create a function to generate a unique task id
function generateTaskId() {
    // Generate ID by appending unique timestamp
    return "ID-"+new Date().getTime();
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    // Get user entered information from form fields
    const taskTitle = $('#taskTitle').val();
    const taskDueDate = $('#taskDueDate').val();
    const taskDescription = $('#taskDescription').val();

    // Assign id to task
    const taskID =generateTaskId.call();

    // Clear user entered form inputs
    $('#taskTitle').val('');
    $('#taskDueDate').val('');
    $('#taskDescription').val('');

    // Close the modal
    $('#formModal').modal('hide');

    // Initiate the task info object
    const taskInfo={
        id:taskID,
        title:taskTitle,
        dueDate:taskDueDate,
        description:taskDescription,
        status:'todo'
    };

    // Check if taskList Array exist in localStorage

    const taskListArray = JSON.parse(localStorage.getItem('taskList'));
    if(taskListArray !== null){
        taskList = taskListArray;
        taskList.push(taskInfo);
        localStorage.setItem('taskList',JSON.stringify(taskList));
    }else{
        let taskList = [];
        taskList.push(taskInfo);
        localStorage.setItem('taskList',JSON.stringify(taskList));
    }





}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Event Listener on save button of modal dialog
    saveTaskButtonEl.on('click',handleAddTask);


});
