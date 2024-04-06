// 观察者模式
var EventEmitter = require('events');
var cpuNums = require('os').cpus();

console.log(cpuNums.length, 'cpunums');

// 工厂模式应用
const events = new EventEmitter();

events.on('click', (data) => {
    console.log(data, 'upload data')
});

events.emit('click', JSON.stringify({name:"gg", id: 1}));


