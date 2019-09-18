const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const users = require('./users')

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.render('index'))
app.get('/home', (req, res) => res.render('index'))
app.get('/userslist', (req, res) => res.render('userslist'))

app.listen(port, () => console.log(`App listening on port ${port}`))

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    Object.assign(req.body, {"id": Math.random()*1000})
    users.push(req.body)
})

app.post('/home', (req, res) => {
    res.redirect('/')
})

app.post('/userslist', (req, res) => {
    res.redirect('/userslist')
})