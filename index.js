const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

// const category = require('./data/CoursesCategory.json')
const categories = require('./data/CoursesCategory.json')
const courses = require('./data/Courses.json')

app.get('/', (req, res) => {
    res.send("Server Connected....")
})

// app.get('/category', (req, res) => {
//     res.send(category);
// })

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/courses', (req, res) => {
    res.send(courses)
})
// app.get('/categories', (req, res) => {
//     res.send(courses)
// })

app.get('/categories/:Category_id', (req, res) => {
    const category_id = req.params.Category_id;
    const selectedCategory = courses.filter(n => n.Category_id == category_id) || {}
    // coursesByCategory
    res.send(selectedCategory);
})

app.get('/courses/:course_id', (req, res) => {
    const course_id = req.params.course_id;
    const relatedCourse = courses.find(n => n.id == course_id) || {}
    // selectedCourse
    res.send(relatedCourse)
})

// app.get('/courses/:id', (req, res) => {
//     const id = req.params.id;
//     const course = courses.find(c => c.id === id)
//     res.send(course)
// })

app.listen(port, () => {
    console.log(`ProForce Server On Listening Port ${port}`);
})