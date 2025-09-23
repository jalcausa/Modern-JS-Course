const itemInput = document.getElementById("item-input");

const onKeyPress = e => {
	console.log("keypress");
}

const onKeyUp = (e) => {
  console.log("keyup");
};

const onKeyDown = (e) => {

	//key: tecla pulsada
	if (e.key === "Enter")
		alert("You pressed enter");

	// keyCode
	// https://www.toptotal.com/developers/keycode/table-of-all-keycodes
	if (e.keyCode === 13)
		alert("You pressed again");

	// code
	if (e.code === "Digit1") {
		console.log("You pressed 1");
	}

	// e.repeat es un booleano que indica si se está manteniendo pulsada alguna tecla
	if (e.repeat) {
		console.log("You are holding down " + e.key);
	}

	// Para saber si estaba pulsado Shift, Control o Alt cuando ocurrió el evento
	console.log("Shift: " + e.shiftKey);
	console.log("Control: " + e.ctrlKey);
	console.log("Alt: " + e.altKey);

	if (e.shiftKey && e.key === "K") {
		console.log("You hit shift + K");
	}

};

// Ocurre al pulsar una tecla
// itemInput.addEventListener("keypress", onKeyPress);

// Ocurre al soltar una tecla
// itemInput.addEventListener("keyup", onKeyUp);

// Ocurre cada cierto tiempo mientras se mantiene pulsada una tecla hasta que la soltamos
itemInput.addEventListener("keydown", onKeyDown);
