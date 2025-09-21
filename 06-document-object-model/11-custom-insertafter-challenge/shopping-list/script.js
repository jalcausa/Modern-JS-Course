function insertAfter(newEl, existingEl) {
	existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);

/*
Esta función sirve porque nextSibling apunta al siguiente elemento para elementos intermedios y con el último elemento nextSibling es null. Por tanto, la función

insertBefore(newElement, referenceElement):

Si referenceElement existe: inserta newElement justo antes de referenceElement
Si referenceElement es null: inserta newElement al final del contenedor padre
*/