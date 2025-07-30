const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const operator = req.body.operator;

  let result;

  if (operator === '+') {
    result = `Addition: ${num1 + num2}`;
  } else if (operator === '-') {
    result = `Subtraction: ${num1 - num2}`;
  } else if (operator === '*') {
    result = `Multiplication: ${num1 * num2}`;
  } else if (operator === '/') {
    result = `Division: ${num1 / num2}`;
  } else {
    result = 'Invalid operator';
  }

  res.send(`<h2>${result}</h2><a href="/">Back</a>`);
});


app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'))

})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
