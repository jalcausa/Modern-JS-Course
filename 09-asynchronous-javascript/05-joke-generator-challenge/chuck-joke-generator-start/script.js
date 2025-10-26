const btn = document.getElementById("joke-btn");
const divJoke = document.getElementById("joke");

function displayNewJoke(response) {
	divJoke.innerHTML = response;
}

function getNewJoke() {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.chucknorris.io/jokes/random");
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			// console.log(JSON.parse(this.responseText));
			displayNewJoke(JSON.parse(this.responseText)["value"]);
		}
		else if (this.readyState === 4) {
			displayNewJoke("Could not load joke.")
		}
	}

	xhr.send();
}


btn.addEventListener("click", getNewJoke);
document.addEventListener("DOMContentLoaded", getNewJoke);