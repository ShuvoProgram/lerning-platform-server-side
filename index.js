const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const category = require('./data/CoursesCategory.json')

app.get('/', (req, res) => {
    res.send("Server Connected....")
})

app.get('/category', (req, res) => {
    res.send(category);
})

app.listen(port, () => {
    console.log(`ProForce Server On Listening Port ${port}`);
})