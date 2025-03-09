const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const setRoutes = require('./routes/index');
const setTodoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3001' })); // Allow requests from frontend

setRoutes(app);
setTodoRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});