import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express(); // every express application
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes); //every route inside postroutes will start with posts. added prefix "posts" to get to localhost:5000/posts

app.get('/', (req, res) => {
    res.send('Hello to Study Trackers API')
});
// https://www.mongodb.com/cloud/atlas

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { UseNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));