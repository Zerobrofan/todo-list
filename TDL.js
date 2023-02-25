const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const tasks = document.querySelector('#tasks');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = input.value;
    if (task) {
        addTask(task);
        input.value = '';
    } else {
        alert('Please enter a task');
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.innerHTML = `${task}
    <button type="button" class="delete">
      <i class="fas fa-trash"></i>
    </button>`;
    tasks.appendChild(li);
}

tasks.addEventListener('click', (event) => {
    if (event.target.className === 'delete') {
        event.target.parentElement.remove();
    } else if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
});
