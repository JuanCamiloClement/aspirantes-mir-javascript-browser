const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado')

input.addEventListener('input',function(){
    const texto = input.value.toUpperCase();
    resultado.textContent = texto;
})

const textoInicial = document.querySelector('#texto');
const textoEnBoton = document.querySelector('.btn');
const textoBotonUndido = document.querySelector('#resultadoMayusculas');

textoEnBoton.addEventListener('click',function(){
    let nuevoTexto = textoInicial.value.toUpperCase();
    textoBotonUndido.textContent = nuevoTexto;
})