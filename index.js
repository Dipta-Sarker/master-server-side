const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req,res) =>{
  res.send(courses)
})

app.get('/course/details/:id', (req,res)=>{
  const id = req.params.id;
  const singleCourse = courses.find(course => course.id == id)
  res.send(singleCourse)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})