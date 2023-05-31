const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const section = document.querySelector('section');

const listFromLocalStorage = document.createElement('ul');
section.appendChild(listFromLocalStorage);

const listElement1 = document.createElement('li');
if (localStorage.getItem('name') == null){
    listElement1.textContent = 'No hay dato de nombre';
} else {
    listElement1.textContent = localStorage.getItem('name')
}

const listElement2 = document.createElement('li');
if (localStorage.getItem('email') == null){
    listElement2.textContent = 'No hay dato de email';
} else {
    listElement2.textContent = localStorage.getItem('email');
}

listFromLocalStorage.appendChild(listElement1);
listFromLocalStorage.appendChild(listElement2);

form.addEventListener('submit',function(){
    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email',emailInput.value);
})

const buttonToDeleteName = document.createElement('button');
buttonToDeleteName.setAttribute('type','submit');
buttonToDeleteName.textContent = 'Eliminar todo de Local Storage';
section.appendChild(buttonToDeleteName);

function deleteAll(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
}

buttonToDeleteName.addEventListener('click',function(){
    deleteAll();
});