// Create a promise
const promise = new Promise((resolve, reject) => {
	// Do some async task
	setTimeout(() => {
		console.log("Async task complete");
		resolve();
	}, 1000);
});

// Takes a callback function as an argument
promise.then(() => {
	console.log("Promise consumed");
});

const getUser = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
	let error = true; // Iría como false probamos a true para ver cómo manejar errores

	if (!error) {
		resolve({name: "John", age: 30}); // What the promise returns
	} else {
		reject("Error: Something went wrong");
	}
  }, 1000);
}).then((user) => console.log(user));

getUser
	.then((user) => console.log(user))
	.catch((error) => console.log(error))
	.finally(() => console.log("The promised has been resolved or rejected")); // Se ejecuta siempre

console.log("Hello from global scope");