const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const category = require('./data/CoursesCategory.json')
const courses = require('./data/Courses.json')

app.get('/', (req, res) => {
    res.send("Server Connected....")
})

app.get('/category', (req, res) => {
    res.send(category);
})

app.get('/category/:Category_id', (req, res) => {
    const category_id = req.params.Category_id;
    const selectedCategory = category.find(n => n.Category_id == category_id)
    res.send(selectedCategory);
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:Category_id', (req, res) => {
    const course_id = req.params.Category_id;
    const relatedCourse = courses.filter(n => n.Category_id == course_id)
    res.send(relatedCourse)
})

app.listen(port, () => {
    console.log(`ProForce Server On Listening Port ${port}`);
})