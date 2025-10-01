/*

Aunque pongamos el tiempo a 0 en setTimeout se ejecutará después del código síncrono que haya en el global scope

*/
/*
setTimeout(function() {
	console.log("Hello from callback");
}, 2000);

console.log("Hello from global scope");

*/


// También podemos usar funciones nombradas
// setTimeout(changeText, 2000);

function changeText() {
	document.querySelector("h1").textContent = "Hello from callback";
}

const timerId = setTimeout(changeText, 3000); // setTimeout devuelve un timerId

// Podemos cancelar un timeout usando clearTiemout, en este caso lo haremos al pulsar el botón

document.querySelector("#cancel").addEventListener("click", () => {
	console.log(timerId);
	clearTimeout(timerId);
	console.log("Timer Cancelled");
});