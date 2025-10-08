// xhr = XML HTTP Request Object
const xhr = new XMLHttpRequest();

// Para fichero local
//xhr.open("GET", "./movies.json");

// Para GitHub
xhr.open("GET", "https://api.github.com/users/jalcausa/repos");

/*

readyState tiene 5 posibles valores:
-0: petición no inicializada.
-1: conexión con el servidor establecida.
-2: petición recibida.
-3: procesando petición.
-4: petición completada y respuesta lista

Nos insteresa cuando readyState es 4
*/

// Ejemplo cuando trabajamos con ficheros en local:
/*
xhr.onreadystatechange = function () {
	if (this.readyState === 4 && this.status === 200){
		//console.log(JSON.parse(this.responseText));

		const data = JSON.parse(this.responseText);

		data.forEach(movie => {
			const li = document.createElement("li");
			li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
			document.querySelector("#results").appendChild(li);
		});
	}
}
*/

// Ejemplo con la API de GitHub
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    //console.log(JSON.parse(this.responseText));

    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector("#results").appendChild(li);
    });
  }
};


xhr.send();