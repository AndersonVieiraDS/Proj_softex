import express from 'express';
import { login } from '../controllers/authController';
import path from 'path';

const app = express();

app.post('/', login);
app.get('/home', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'home.html'));
  });