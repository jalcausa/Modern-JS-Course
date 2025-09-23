
const logo = document.querySelector("img");


const onClick = () => console.log("click event");

const onDoubleClick = () => {
	if (document.body.style.backgroundColor !== "purple") {
		document.body.style.backgroundColor = "purple";
    	document.body.style.color = "white";
	} else {
		document.body.style.backgroundColor = "white";
    	document.body.style.color = "black";
	}
};

const onRightClick = () => console.log("right click event");

const onMouseDown = () => console.log("mouse down event");

const onMouseUp = () => console.log("mouse up event");

const onMouseWheel = () => console.log("mouse wheel event");

const onMouseOver = () => console.log("mouse over event");

const onMouseOut = () => console.log("mouse out event");

const onDragStart = () => console.log("on grad start");

const onDrag = () => console.log("on drag");

const onDragEnd = () => console.log("drag end event");

// Event Listeners
// click
logo.addEventListener("click", onClick)

// Double click
logo.addEventListener("dblclick", onDoubleClick);

// Right click
logo.addEventListener("contextmenu", onRightClick);

// Mouse down: cuando pulsar y aguantas sin soltar. Un click es un mouse down y mouse up

logo.addEventListener("mousedown", onMouseDown);

// Mouse up: al soltar
logo.addEventListener("mouseup", onMouseUp);

// Wheel: cuando deslizo la "rueda" del mouse desde el logo
logo.addEventListener("wheel", onMouseWheel);

// Mouse over (hover): cuando el cursor está sobre el elemento
logo.addEventListener("mouseover", onMouseOver);

// Cuando el cursor deja de estar sobre el elemento
logo.addEventListener("mouseout", onMouseOut);

// Drag Start al agarrar un elemento y moverlo
logo.addEventListener("dragstart", onDragStart);

// Drag: Mientras lo tengo agarrado se dispara hasta que lo suelto
logo.addEventListener("drag", onDrag);

// Drag End: cuando lo suelto
logo.addEventListener("dragend", onDragEnd);