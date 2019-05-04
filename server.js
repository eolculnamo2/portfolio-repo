/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require('dotenv').config();;
import express from 'express';
import compression from 'compression';
import controller from './backend/controller';
const app = express();

app.use(compression());
app.use(express.static('assets/dist'));

app.use('/', controller);

// eslint-disable-next-line no-console
app.listen(8080, () => console.log('Server on.'));
