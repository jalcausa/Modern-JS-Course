/* Event Bubbling */
/*

Cuando añadimos un eventListener el evento se mueve hacia arriba en el DOM y si encuentra un elemento superior que tiene un eventListener para ese mismo evento se disparará de nuevo y se realizará la acción correspondiente

*/

const button = document.querySelector("form button");

//Padre del botón
const div = document.querySelector("form div:nth-child(2)");

// Padre del div
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
	alert("the button was clicked");
	// e.stopPropagation(); // Para evitar que se propage hacia arriba
});

div.addEventListener("click", () => {
	alert("div was clicked");
});

form.addEventListener("click", () => {
	alert("form was clicked");
});

document.body.addEventListener("click", () => {
	alert("body was clicked");
});