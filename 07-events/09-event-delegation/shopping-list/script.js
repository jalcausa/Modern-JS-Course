const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// 1ª Forma: hacerlo a mano, elemento a elemento
/*
listItems.forEach(item => {
	item.addEventListener("click", (e) => {
		e.target.remove();
	})
});
*/

// 2ª Forma: a través del padre
/*
target: el elemento que lanza el evento
currentTarget: el elemento que tiene un eventListener asociado al evento

Comprobamos si el elemento que ha lanzado el evento en un li y sólo en ese caso lo eliminamos.

tagName es una propiedad que tienen los elementos HTML indicando de qué tipo son (lo devuelven en mayúscula)

*/
list.addEventListener("click" , (e) => {
	if (e.target.tagName === "LI") {
		e.target.remove();
	}
});

list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});