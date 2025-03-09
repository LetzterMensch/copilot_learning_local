class Todo {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
        this.createdAt = new Date();
    }
}

let todos = [];
let nextId = 1;

const TodoModel = {
    create(todoData) {
        const newTodo = new Todo(nextId++, todoData.title, todoData.description);
        todos.push(newTodo);
        return newTodo;
    },
    delete(id) {
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
        if (todoIndex === -1) {
            return null;
        }
        const deletedTodo = todos.splice(todoIndex, 1);
        return deletedTodo;
    },
    update(id, todoData) {
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
        if (todoIndex === -1) {
            return null;
        }
        todos[todoIndex] = { ...todos[todoIndex], ...todoData };
        return todos[todoIndex];
    },
    complete(id) {
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
        if (todoIndex === -1) {
            return null;
        }
        todos[todoIndex] = { ...todos[todoIndex], completed: true };
        return todos[todoIndex];
    },
    getAll() {
        return todos;
    }
};

module.exports = TodoModel;