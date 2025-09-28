/*

Si tenemos nuestro script incluido en el head del HTML no podemos hacer cosas como document.querySelector("h1") porque todavía no se ha cargado el DOM y estamos intentando acceder algo que aún no existe, ya que el código en JavaScript se está ejecutando antes de que se cargue la página por completo.

Una posible solución es incluir el código dentro de window.onload para que se ejecute una vez se ha cargado la página

Otra solución más moderna es añadir el atributo defer en la etiqueta script de la siguiente manera para que se cargue el script al final

<script src="./script.js" defer></script>

*/

// window.onload = function () {
// 	document.querySelector("h1").textContent = "Hello world";
// };

// Otra forma de hacerlo es con un event listener sobre la ventana
window.addEventListener("load", () => {
	console.log("Page loaded");
});

/* También podemos usar DOMContentLoaded

La diferencia es que DOMContentLoaded se lanza en cuanto se ha parseado el contenido del HTML y cargado sin esperar a que carguen todos los recursos como imágenes o vídeos

load espera a que todos los recursos que incluye el html se hayan cargado

El evento DOMContentLoaded se lanza antes que el load

*/
window.addEventListener("DOMContentLoaded", () => {
	console.log("DOM loaded");
});

// Otros evetos sobre la ventana:

window.addEventListener("resize", () => {
	document.querySelector("h1").innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener("scroll", () => {
	console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

	if (window.scrollY > 70) {
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
	} else {
		document.body.style.backgroundColor = "white";
    	document.body.style.color = "black";
	}
});

window.addEventListener("focus", () => {
	document.querySelectorAll("p").forEach(p => {
		p.style.color = "blue"
	})
});

window.addEventListener("blur", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
});