const { Pool } = require('pg');

// Utworzenie puli połączeń do bazy danych
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const TaskModel = {
  // Zapisanie nowej listy zadań
  createTask: async (task) => {
    const query = `
    INSERT INTO "5tasks".app.tasksList (tasks, date, userId)
    VALUES ($1, $2, $3)
    RETURNING *;
    `;
    const values = [task.tasks, task.date, task.userId];
    const result = await pool.query(query, values);
    return result.rows[0];
  },
  getTasksByDate: async (date) => {
    const query = `
      SELECT * FROM "5tasks".app.tasksList
      WHERE date = $1;
    `;
    const values = [date];
    const result = await pool.query(query, values);
    return result.rows;
  }
};

module.exports = TaskModel;
