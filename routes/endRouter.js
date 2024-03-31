const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.use('/manage', (req, res) => {
  // const managePage = fs.readFileSync(path.dirname(__dirname) + '/views/manage.ejs');
  // const result = ejs.render(managePage.toString(), {username: 'fxj'});
  // res.send(result);
  res.render('manage', {username: 'fxj'});
});

module.exports = router;