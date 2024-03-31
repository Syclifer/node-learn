const jwt = require('jsonwebtoken');

// const token = jwt.sign(
//   {
//     userName: '乔南',
//     workNo: '386476',
//     theme: 'theme-387',
//     locale: 'zh-cn',
//   },
//   'buc-sso',
//   {
//     expiresIn: 600, // unit second
//   }
// );

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IuS5lOWNlyIsIndvcmtObyI6IjM4NjQ3NiIsInRoZW1lIjoidGhlbWUtMzg3IiwibG9jYWxlIjoiemgtY24iLCJpYXQiOjE3MTE4NTAwMTMsImV4cCI6MTcxMTg1MDYxM30.MNOsNFpPuTX7MPpu_Nu-lVMMpXwKwiIfa-Iksix4JAY';

const a = jwt.verify(token, 'buc-sso');
console.log(a)
