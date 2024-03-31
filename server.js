const express = require('express');
const fs = require('fs');
const path = require('path');
const frontRouter = require('./routes/frontRouter');
const endRouter = require('./routes/endRouter');
const cookieParser = require('cookie-parser')


const app = express();

const logMiddleware = (req, res, next) => {
  const { url, ip } = req;
  fs.appendFileSync(path.resolve(__dirname + '/access.log'), `${url} ${ip} \r\n`);
  next();
};

const crossOriginMiddleware = (req, res, next) => {
  const referer = req.get('referer');
  if (referer) {
    const url = new URL(referer);
    const { hostname } = url;
    if(hostname !== '127.0.0.1'){
      res.status(404);
      res.send('<h1>404 Not Found</h1>');
      return;
    }
  }
  next();
};
app.use(cookieParser());
// app.use(logMiddleware);
// app.use(crossOriginMiddleware);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));
app.use(frontRouter);
app.use('/manage', endRouter);
app.use(express.static(__dirname + '/static'));


app.listen(3000, () => {
  console.log('启动成功');
});