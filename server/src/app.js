/*eslint-disable */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send('This is confirmation we are connected');
	console.log('This is confirmation we are connected');
});

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user has been created!`,
    })
})

app.listen(8081, () => {
	console.log('User server listening on port 8081');
});;

/*eslint-enable */