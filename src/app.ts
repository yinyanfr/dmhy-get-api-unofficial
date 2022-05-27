import express from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import { PREFIX, swaggerOptions } from './config';
import { dmhy } from './router';
import apicache from 'apicache';
import path from 'path';
import cors from 'cors';

const app = express();
const cache = apicache.middleware;

expressJSDocSwagger(app)(swaggerOptions);

app.use(cors());
app.use(cache('10 minutes'));
app.use(PREFIX, dmhy);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

export default app;
