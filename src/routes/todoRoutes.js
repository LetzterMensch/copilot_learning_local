// filepath: /my-express-server/my-express-server/src/routes/todoRoutes.js
const express = require('express');
const TodoController = require('../controllers/todoController');

const setTodoRoutes = (app) => {
    const router = express.Router();
    const todoController = new TodoController();

    router.post('/todos', todoController.createTodo);
    router.delete('/todos/:id', todoController.deleteTodo);
    router.put('/todos/:id', todoController.updateTodo);
    router.put('/todos/:id/complete', todoController.completeTodo
    );
    router.get('/todos', todoController.getTodos);

    app.use('/api', router);
};

module.exports = setTodoRoutes;