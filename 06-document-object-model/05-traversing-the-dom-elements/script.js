let output;

// Get child elements

const parent = document.querySelector(".parent");

output = parent.children; // Propiedad de un elemento HTML que devuelve todos los hijos de un elemento HTML como HTML Collection

// Segundo hijo
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

// Propiedad que devuelve el primer hijo de un elemento
parent.firstElementChild.innerText = "Child One";
parent.firstElementChild.style.color = "Blue";

// Propiedad que devuelve el último hijo de un elemento
parent.lastElementChild.innerText = "Child Three";
parent.lastElementChild.style.color = "Green";


// Get parent elements from child

const child = document.querySelector(".child"); // El primero

// Añadir un borde al padre desde el hijo
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

output = child.parentElement;

// Sibling Elements

// Obtener el segundo hijo usando el selector css nth-child
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
output = secondItem.nextElementSibling; // Tercer elemento
// Podemos cambiar una propiedad del tercer hijo desde el segundo
secondItem.nextElementSibling.style.color = "orange";


console.log(output);