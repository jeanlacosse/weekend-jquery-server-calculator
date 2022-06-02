
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;

const calculateRouter = require('./routes/calculate.router');
app.use('/calculate', calculateRouter)

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('./server/public'));



