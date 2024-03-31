const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fxj');
const insertCallback = (data) => {
  console.log(data);
}

const errorCallback = (error) => {
  console.log(error, 'error');
}
/** */
const execCallback = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data, 'data');
}

mongoose.connection.once('open', () => {
  console.log('连接成功!');
  /*   
  * 定义文档数据结构
  * Schema option: required、unique、enum、default
  * */
  const phoneSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
  });

  const phoneModel = mongoose.model('phones', phoneSchema);
  // 创建文档
  // phoneModel.insertMany([
  //   {
  //   name: 'iphone14',
  //   brand: 'apple',
  //   price: '5499',
  //   },
  //   {
  //     name: 'magic6',
  //     brand: 'honor',
  //     price: '4399',
  //   },
  //   {
  //     name: 'iqoo neo 9',
  //     brand: 'iqoo',
  //     price: '2299',
  //   },
  //   {
  //     name: 'xiaomi 13 pro',
  //     brand: 'xiaomi',
  //     price: '1999',
  //   },
  //   {
  //     name: 'iphone15 pro max',
  //     brand: 'apple',
  //     price: '8999',
  //   },
  //   {
  //     name: 'vivo x100',
  //     brand: 'vivo',
  //     price: '3999',
  //   },
  //   {
  //     name: 'redmi k70',
  //     brand: 'xiaomi',
  //     price: '2399',
  //   },
  // ]).then(insertCallback).catch(errorCallback);

  // 删除文档 批量删除
  // phoneModel.deleteOne({_id: '65fa30a5cdd519b8d5a13f05'}).then(insertCallback).catch(errorCallback);
  // phoneModel.deleteMany({name: 'iphone14'}).then(insertCallback).catch(errorCallback);

  // 更新文档 批量更新
  // phoneModel.updateOne({name: 'xiaomi note 13 pro'}, {name: 'redmi note 13 pro'}).then(insertCallback).catch(errorCallback);
  // phoneModel.updateMany({name: 'iphone14'}, {price: 4999}).then(insertCallback).catch(errorCallback);

  // 查找文档
  phoneModel.find().select({name: 1, price: 1, _id: 0,}).sort({price: -1}).skip(1).limit(3).then(execCallback)
  // phoneModel.find({name: 'iphone14'}).then(insertCallback).catch(errorCallback); 
});

mongoose.connection.on('error', () => {
  console.log('连接失败!');
})

mongoose.connection.on('close', () => {
  console.log('连接失败!');
})
