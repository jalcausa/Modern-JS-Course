/*
-Hay muchos tipos de nodos del DOM, hemos trabajado hasta ahora con elementos que básicamamente son etiquetas html
*/

let output;

const parent = document.querySelector(".parent");

output = parent.childNodes; // NodeList con todos los nodos que son hijos del elemento parent

output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

parent.childNodes[5].style.color = "red";

output = parent.firstChild;
parent.lastChild.textContent = "Hello";


// Parent node

const child = document.querySelector(".child");
output = child.parentNode;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";


console.log(output);