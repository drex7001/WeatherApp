import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import connectDB from './src/config/db.js';

import auth from './src/routes/auth_routes.js';
import privateRoutes from './src/routes/private.js';

dotenv.config();

//connect to the database
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', auth);
app.use('/api/private', privateRoutes);

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Api is working');
  });
}

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
