/*jshint esversion: 6*/
/*global $, state, reRender, reRender, TodoItem*/
const Todo = () => {

    const parent = $('<div class="white-card"></div>'),
        input = $('<input id="input-item" type="text" placeholder="Ingresa la tarea">'),
        todoTitle = $('<p>To Do Items:</p>'),
        list = $('<div class="list"></div>'),
        hr = $('<hr>'),
        completedTitle = $('<p>Completed Items</p>'),
        completedList = $('<div class="completed"></div>');

    parent.append(input);
    parent.append(todoTitle);
    parent.append(list);
    parent.append(hr);
    parent.append(completedTitle);
    parent.append(completedList);

    input.on('keypress', (e) => {
        if (e.which === 13) {
            if (input.val() !== "") {
                state.todos.push({
                    text: input.val(),
                    completed: false
                });
                input.val('');
                reRender(list, completedList);
            }
        }
    });
    return parent;
};

const reRender = (todoList, completedList) => {
    todoList.empty();
    completedList.empty();
    state.todos.forEach(todo => {
        if (!todo.completed) {
            todoList.append(TodoItem(todo, _ => {
                reRender(todoList, completedList);
            }));
        } else {
            completedList.append(TodoItem(todo, _ => {
                reRender(todoList, completedList);
            }));
        }
    });
};

const TodoItem = (data, update) => {
    const todo = $('<div class="todo"></div>'),
        checkbox = $('<input type="checkbox">'),
        span = $('<span>' + data.text + '</span>'),
        remove = $('<button>Remove</button>');

    todo.append(checkbox);
    todo.append(span);
    todo.append(remove);

    checkbox.on('change', (e) => {
        data.completed = !data.completed;
        update();
    });

    remove.on('click', (e) => {
        const idx = state.todos.map(x => x.text).indexOf(data.text);
        state.todos.splice(idx, 1);
        update();
    });

    return todo;
};