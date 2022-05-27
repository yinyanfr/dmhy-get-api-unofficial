import express from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import { PREFIX, swaggerOptions } from './config';
import { dmhy } from './router';
import apicache from 'apicache';

const app = express();
const cache = apicache.middleware;

expressJSDocSwagger(app)(swaggerOptions);

app.use(cache('10 minutes'));
app.use(PREFIX, dmhy);

export default app;
