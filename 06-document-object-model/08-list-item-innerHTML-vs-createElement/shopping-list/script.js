// Quick and dirty
function createListItem(item) {
	const li = document.createElement("li");

	li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
	document.querySelector(".items").appendChild(li);
}


// Clean and Perfomant
function createNewItem(item) {
	const li = document.createElement("li");
	const text = document.createTextNode(item);

	li.appendChild(text);

	const button = document.createElement("button");
	button.className = "remove-item btn-link text-red";

	const icon = document.createElement("i");
	icon.className = "fa-solid fa-xmark";

	button.appendChild(icon);

	li.appendChild(button);

	document.querySelector(".items").appendChild(li);
	//console.log(button);
}

createListItem("Eggs");
createNewItem("Cheese");