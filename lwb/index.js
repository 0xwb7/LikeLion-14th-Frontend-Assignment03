const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const emptyMessage = document.getElementById('emptyMessage');

function updateEmptyMessage() {
    const hasItems = todoList.children.length > 0;
    emptyMessage.hidden = hasItems;
}

function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'todo-delete';
    deleteButton.textContent = '삭제';

    checkbox.addEventListener('change', () => {
        li.classList.toggle('done', checkbox.checked);
    });

    deleteButton.addEventListener('click', () => {
        li.remove();
        updateEmptyMessage();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const text = todoInput.value.trim();

    if (!text) {
        todoInput.focus();
        return;
    }

    const newItem = createTodoItem(text);
    todoList.appendChild(newItem);

    todoInput.value = '';
    todoInput.focus();
    updateEmptyMessage();
});

document.querySelectorAll('.todo-item').forEach((item) => {
    const checkbox = item.querySelector('.todo-checkbox');
    const deleteButton = item.querySelector('.todo-delete');

    checkbox.addEventListener('change', () => {
        item.classList.toggle('done', checkbox.checked);
    });

    deleteButton.addEventListener('click', () => {
        item.remove();
        updateEmptyMessage();
    });
});

updateEmptyMessage();
