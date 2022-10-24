const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send("Server Connected....")
})

app.listen(port, () => {
    console.log(`ProForce Server On Listening Port ${port}`);
})