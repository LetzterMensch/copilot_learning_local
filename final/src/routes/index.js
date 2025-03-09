// filepath: /my-express-server/my-express-server/src/routes/index.js
const express = require('express');
const IndexController = require('../controllers/index');
const todoRoutes = require('./todoRoutes');

function setRoutes(app) {
    const indexController = new IndexController();
    
    app.get('/', indexController.getIndex);
    todoRoutes(app);
}

module.exports = setRoutes;