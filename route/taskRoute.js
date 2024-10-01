const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

// POST - zapisywanie zadań
router.post('/task', taskController.createTask);
router.get('/task/date/:date', taskController.getTasksByDate);


module.exports = router;
