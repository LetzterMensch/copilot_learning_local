const TodoModel = require('../models/todoModel');

class TodoController {
    constructor() {
        this.createTodo = this.createTodo.bind(this);
        this.getTodos = this.getTodos.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }

    createTodo(req, res) {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).send('Title is required');
        }
        const newTodo = TodoModel.create({ title, description });
        res.status(201).json(newTodo);
    }

    getTodos(req, res) {
        const todos = TodoModel.getAll();
        res.json(todos);
    }

    deleteTodo(req, res) {
        const { id } = req.params;
        const deletedTodo = TodoModel.delete(id);
        if (!deletedTodo) {
            return res.status(404).send('Todo not found');
        }
        res.status(204).send();
    }

    updateTodo(req, res) {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedTodo = TodoModel.update(id, { title, description });
        if (!updatedTodo) {
            return res.status(404).send('Todo not found');
        }
        res.status(200).json(updatedTodo);
    }

    completeTodo(req, res) {
        const { id } = req.params;
        const completedTodo = TodoModel.complete(id);
        if (!completedTodo) {
            return res.status(404).send('Todo not found');
        }
        res.status(200).json(completedTodo);
    }
}

module.exports = TodoController;