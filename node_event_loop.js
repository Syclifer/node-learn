const fs = require('fs');

const time1 = new Date().getTime();

// ++++++++++++++  Case 1

// fs.readFile(__dirname + '/public/images/compass.png', (e, data) => {
//     console.log(`读文件执行时间间隔:${new Date().getTime() - time1}`);
//     while(new Date().getTime() - time1 < 1000){}
// });

// setTimeout(() => {
//     console.log(`timer执行时间间隔:${new Date().getTime() - time1}`);
// }, 10);


// ++++++++++++++  Case 2
//假设读文件小于10ms
// fs.readFile(__dirname + '/public/images/compass.png', (e, data) => {
//     console.log(`readFile 1 ${new Date().getTime() - time1}`);
//     while(new Date().getTime() - time1 < 100){};
//     fs.readFile(__dirname + '/app.js', (e, data) => {
//         console.log(`readFile 2 ${new Date().getTime() - time1}`);
//     });
//     Promise.resolve().then(() => {
//         console.log(`Promise 2 ${new Date().getTime() - time1}`);
//     });
//     process.nextTick(() => {
//         console.log(`nextTick 2 ${new Date().getTime() - time1}`);
//     });
//     setImmediate(() => {
//         console.log(`setImmediate 2 ${new Date().getTime() - time1}`);
//     });
//     setTimeout(() => {
//         console.log(`setTimeout 2 ${new Date().getTime() - time1}`);
//     }, 0);
// });

// setTimeout(() => {
//     console.log(`setTimeout 1 ${new Date().getTime() - time1}`);
// }, 10);

// setImmediate(() => {
//     console.log('setImmediate 1');
// });

// Promise.resolve().then(() => {
//     console.log('Promise 1');
// });

// process.nextTick(() => {
//     console.log('nextTick 1');
// });

// ++++++++++++++  Case 3
setImmediate(() => {
    console.log('setImmediate 1');
});

setTimeout(() => {
    console.log('setTimeout');
    process.nextTick(() => {
        console.log('nextTick');
    });
    setImmediate(() => {
        console.log('setImmediate 2');
    })
}, 0);