// function toggle(e) {
//   console.log('callback ran');
//   // toggle alterna la clase (si está la quita si no está la añade)
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

// Una función de callback no tiene por qué ser asíncrona siempre. Puede ser síncrona como las funciones que se le pasan a forEach

const posts = [
	{title: "Post One", body: "This is post one"},
	{title: "Post Two", body: "This is post two"}
];

// Simular un POST
/*
cb es una función de callback que toma nuestra función como argumento y a la que llama justo después de crear el nuevo post
*/
function createPost(post, cb) {
	setTimeout(() => {
		posts.push(post);
		cb();
	}, 2000);
}

// Simular un fetch a una API
function getPosts(){
	setTimeout(() => {
		posts.forEach(function(post) {
			const div = document.createElement("div");
			div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
			document.querySelector("#posts").appendChild(div);
		});
	}, 1000);
}

createPost({title: "Post Three", body: "This is post three"}, getPosts);