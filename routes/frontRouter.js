const express = require('express');

const router = express.Router();

const checkPasswordMidware =  (req, res, next) => {
  console.log('checkPasswordMidware');
  const { query } = req;
  const { pwd } = query;
  if (pwd === '503494633') {
    next();
  } else {
    res.send('password wrong!');
  }
};

router.get('/home', (request, response) => {
  const cookies = request.cookies
  response.send(`hello ${cookies.name}`);
});

router.get('/login', (request, response) => {
  response.cookie('pid', 'asdwqdq', {maxAge: 1000 * 1000, httpOnly: true});
  response.cookie('name', 'fxj');
  response.send('login');
});

router.get('/sign-out', (request, response) => {
  response.clearCookie('pid');
  response.send('sign out');
});

router.get('/phone/:id', checkPasswordMidware, (req, res) => {
  const { id } = req.params;
  res.send(`this is phone ${id}`);
})
  
router.post('/api/userlogin', (req, res) => {
  const { body } = req;
  res.json({name: 'fxj'});
})

module.exports = router;