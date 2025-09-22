const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
	// className
	// console.log(itemList.className);
	// text.className = "card dark";

	//classList
	// console.log(itemList.classList); DOMTokenList sobre el que podemos iterar

	// itemList.classList.forEach(c => console.log(c));

	// text.classList.add("dark");
	// text.classList.remove("card");

	// text.classList.toggle("dark"); // Añade "dark" al pulsarlo y lo quita si se pulsa de nuevo

	// text.classList.toggle("hidden");

	// text.classList.replace("card", "dark");

	// Change style

	// itemList.style.lineHeight = "3"; // line-height en CSS se usa camelCase aquí

	items.forEach((item, index) => {
		item.style.color = "red";

		if (index === 2) {
			item.style.color = "blue";
		}
	})
}

document.querySelector("button").onclick = run;