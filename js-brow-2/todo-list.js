const taskInput = document.querySelector('#input-space');
const addButton = document.querySelector('#add-button');
const listOfElements = document.querySelector('#list-of-elements');

let arrayOfTasks = [];

function createObject(){
    const newTask = {};
    newTask.id = arrayOfTasks.length + 1;
    newTask.title = taskInput.value;
    newTask.completed = false;
    arrayOfTasks.push(newTask);
    return newTask;
}

function createCheckbox(object){
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id',object.id);
    return checkbox;
}

function createLabel(object){
    const label = document.createElement('label');
    label.setAttribute('for',object.id);
    label.textContent = object.title;
    return label;
}

function createListItem(checkbox,label){
    const item = document.createElement('li');
    item.appendChild(checkbox);
    item.appendChild(label);
    return item;
}

function addListItem(listItem){
    listOfElements.appendChild(listItem);
}

addButton.addEventListener('click',function(event){
    event.preventDefault();
    const object = createObject();
    const checkbox = createCheckbox(object);
    const label = createLabel(object);
    const listItem = createListItem(checkbox,label);
    addListItem(listItem);
    taskInput.value='';
})