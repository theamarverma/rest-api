const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const coursesRouter = require('./routes/courses');
require('dotenv').config(); //init dotenv

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION_URL, () => {
	console.log('Connected to db !!');
});
app.use(bodyParser.json());
app.use('/api/v1/courses', coursesRouter);

app.listen(process.env.PORT, () => {
	console.log('Server is running.');
});
