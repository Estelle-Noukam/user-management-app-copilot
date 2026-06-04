const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use('/', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/profile', require('./routes/profile'));

app.listen(8080, '0.0.0.0', () => {
  console.log('SERVER OK http://localhost:8080');
});
``
