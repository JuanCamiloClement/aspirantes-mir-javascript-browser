const form = document.querySelector('form');
const input = document.querySelector('input');
const section = document.querySelector('section');

const nameFromLocalStorage = document.createElement('p');

if (localStorage.getItem('name') == null){
    nameFromLocalStorage.textContent = 'No hay datos';
} else {
    nameFromLocalStorage.textContent = localStorage.getItem('name')
}

section.appendChild(nameFromLocalStorage);

form.addEventListener('submit',function(){
    localStorage.setItem('name',input.value);
})

const buttonToDeleteName = document.createElement('button');
buttonToDeleteName.setAttribute('type','submit');
buttonToDeleteName.textContent = 'Eliminar nombre de Local Storage';
section.appendChild(buttonToDeleteName);

function deleteName(){
    localStorage.removeItem('name');
}

buttonToDeleteName.addEventListener('click',function(){
    deleteName();
});