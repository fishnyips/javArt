import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Entry from './models/Entry';
const app = express();
const router = express.Router();
const upload = require('./upload');

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/test');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/entries').get((req, res) => {
    Entry.find((err, entries) => {
        if (err)
            console.log(err);
        else
            console.log(entries);
            res.json(entries);
    });
});

app.post('/upload', upload);



app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));