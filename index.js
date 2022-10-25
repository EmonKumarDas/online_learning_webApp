const express = require('express')
const app = express()
const port = 5000
let cors = require('cors')
const Course = require('./data/Courses.json')
const detailsCourse = require('./data/DetailCourse.json')


app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/Course', (req, res) => {
    res.send(Course)
})


app.get('/course/:_id', (req, res) => {
    const getCourse = detailsCourse.filter(course => course.id == req.params._id)
    res.send(getCourse)
})

app.get('/detailsCourse/:id', (req, res) => {
    let DetailsCourseByUniqId = detailsCourse.find(Detailscourse => Detailscourse.course_id === req.params.id)
    console.log(DetailsCourse)
    res.send(DetailsCourseByUniqId)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})