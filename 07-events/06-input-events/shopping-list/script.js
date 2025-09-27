const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
	heading.textContent = e.target.value;
	// console.log(e.target.value); // Devuelve el contenido introducido por el usuario
}

function onChecked(e) {
	const isChecked = e.target.checked; // Booleano indicando si se ha marcado o no el checkbox
	heading.textContent = isChecked ? "Checked" : "Not checked";
}

function onFocus (e) {
	console.log("Input is focused");
	itemInput.style.outlineStyle = "solid";
	itemInput.style.outlineWidth = "1px";
	itemInput.style.outlineColor = "green";
}

function onBlur (e) {
	console.log("Input is not focus");
	itemInput.style.outlineStyle = "none";
}

itemInput.addEventListener("input", onInput);

priorityInput.addEventListener("change", onInput); // Igual que input

checkbox.addEventListener("input", onChecked);

itemInput.addEventListener("focus", onFocus); // Al pulsar la caja del input
itemInput.addEventListener("blur", onBlur); // Al pulsar fuera de la caja del input