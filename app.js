require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const taskRoute = require('./route/taskRoute');

app.use(cors({
  origin: 'http://localhost:3000', // Zezwalaj na żądania z frontendu
}));

// Middleware do obsługi JSON
app.use(express.json());

// Trasy
app.use('/api', taskRoute);

// Serwer
const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

