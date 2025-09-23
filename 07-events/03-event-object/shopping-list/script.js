const logo = document.querySelector("img");

function onClick(e) {
	// console.log(e.target);
	// console.log(e.currentTarget);
	// console.log(e.type);
	// console.log(e.timeStamp);
	// console.log(e.clientX);
	// console.log(e.clientY);
	// console.log(e.offsetX);
  	// console.log(e.offsetY);
	// console.log(e.screenX);
  	// console.log(e.screenY);
};

logo.addEventListener("click", onClick);

// document.body.addEventListener("click", function (e) {
// 	console.log(e.target);
//   	console.log(e.currentTarget);
// })


/* PREVENT DEFAULT*/
// Evita que se realice la acción por defecto asociada a un evento

document.querySelector("a").addEventListener("click", function(e) {
	e.preventDefault();

	console.log("Link was clicked");
})

function onDrag(e) {
	document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener("drag", onDrag);

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case

Podemos añadir un eventListener al body por ejemplo para detectar clicks. Entonces cuando se pulsa en un li por ejemplo, ese evento los dispara el li pero se realiza la acción por estar el eventListener asociado al body, ya que los eventos se elevan (bubbling), desde abajo hasta arriba

- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/