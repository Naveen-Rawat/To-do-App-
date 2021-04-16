const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

// Generate template for each new added task
const generateTemplate = task => {
	const HTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
			        <span>${task}</span>
			        <i class="far fa-trash-alt delete"></i>
			      </li>`;
	return HTML;
};

addForm.addEventListener('submit', e => {
	e.preventDefault();
	const task = addForm.add.value.trim();

	if (task.length < 3)
		return;

	const HTML = generateTemplate(task);
	ul.innerHTML += HTML;
	// addForm.add.value = "";
	addForm.reset(); // Use this for reset the entire form
});


// Delete Todo
ul.addEventListener('click', e => {
	if (e.target.classList.contains('delete'))
	{
		e.target.parentElement.remove();
	}
});

// We get todos which don't contain the term and then we remove it's display
const filterTodos = (term) => {
	Array.from(ul.children)
		.filter (todo => !todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.add('filtered'));

	Array.from(ul.children)
		.filter (todo => todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.remove('filtered'));
};

// Key-up event for searching
search.addEventListener('keyup', e => {
	const value = e.target.value.trim().toLowerCase();	// search.value also works
	// console.log(value);
	filterTodos(value);
});

