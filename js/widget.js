'use strict'

let link = "data/employees.json";

fetch(link).then(response => response.json()).then(addEmployees);

function addEmployees(data) {
	let list = document.querySelector('#employeeList');
	let bulletedUl = document.createElement('ul');
	bulletedUl.classList.add('bulleted');

	list.append(bulletedUl);

	data.forEach(element => {
		let  bulletedLi = document.createElement('li');
		bulletedLi.textContent = element.name;
		!element.inoffice ? bulletedLi.classList.add('out') : bulletedLi.classList.add('in');
		bulletedUl.append(bulletedLi);
	});
}
