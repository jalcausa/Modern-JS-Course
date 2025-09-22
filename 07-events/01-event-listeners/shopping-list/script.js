const clearBtn = document.querySelector("#clear");

// function onClear() {
// 	alert("Clear items");
// };

// JavaScript Event Listener
// clearBtn.onclick = function () {
// 	console.log("Clear Items");
// };

// addEventListener() // Recomendada
// clearBtn.addEventListener("click", onClear);
// clearBtn.addEventListener("click", () => console.log("Clear items"));

// Elimina el eventListener tras 5000ms = 5s
// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// Pulsa el botón desde JavaScript
// setTimeout(() => clearBtn.click(), 5000);

// Borrar todos los elementos de la lista al pulsar el botón

function onClear() {
	const ul = document.querySelector("ul");
	const lis = ul.querySelectorAll("li");

	lis.forEach((item) => item.remove());

	// while (ul.firstChild) {
	// 	ul.removeChild(ul.firstChild);
	// }
}

clearBtn.addEventListener("click", onClear);