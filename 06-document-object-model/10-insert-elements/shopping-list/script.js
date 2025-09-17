// insertAdjacentElement Example
function insertElement() {
	const filter = document.querySelector(".filter");

	const h1 = document.createElement("h1");
	h1.textContent = "insertAdjacentElement";
	filter.insertAdjacentElement("beforebegin", h1);
}


// insertAdjacentText Example
function insertText() {
	const item = document.querySelector("li");

	item.insertAdjacentText("afterbegin", "insertAdjacentText");
}

// insertAdjacentHTML example
function insertHTML() {
	const clearBtn = document.querySelector("#clear");

	clearBtn.insertAdjacentHTML("afterend", "<h2>insertAdjacentHTML</h2>");
}

// insertBefore Example
/*
Toma una referencia del padre y se llama sobre ese elemento. El primer argumento es el elemento a insertar y el segundo es la referencia del elemento concreto respecto al cual queremos insertar antes el nuevo elemento
*/
function insertBeforeItem() {
	const ul = document.querySelector("ul");

	const li = document.createElement("li");
	li.textContent = "insertBefore";

	const thirdItem = document.querySelector("li:nth-child(3)");

	ul.insertBefore(li, thirdItem);
}



insertElement();
insertText();
insertHTML();
insertBeforeItem();

/*
Diferentes posiciones donde se puede insertar un elemento:
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
