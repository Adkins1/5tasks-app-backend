const { v4: uuidv4 } = require('uuid');
const TaskModel = require('../model/taskModel');

const taskController = {
  createTask: async (req, res) => {
    const { tasks, date } = req.body;
    const userId = null; // Domyślnie null dla użytkownika

    try {
      const taskData = createTaskData(tasks, date, userId);
      const newTask = await TaskModel.createTask(taskData);
      res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getTasksByDate: async (req, res) => {
    const { date } = req.params;

    try {
      const tasks = await TaskModel.getTasksByDate(date);
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching tasks' });
    }
  },
};

// Funkcja pomocnicza do tworzenia danych zadania
const createTaskData = (tasks, date, userId) => {
  return {
    id: uuidv4(),
    tasks: JSON.stringify(tasks),
    date,
    userId,
  };
};

module.exports = taskController;
