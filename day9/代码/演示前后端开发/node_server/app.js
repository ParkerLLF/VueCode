// 1. 创建 express 服务器
const express = require('express')

const app = express()


//2.0 将所有api的请求响应content-type设置为application/json
app.all('/api/*', (req, res, next) => {
  //设置允许跨域响应报文头
  //设置跨域
  // 启用 Node 服务器端的 cors 跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "*");

  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  next();
});


// 注册解析 表单数据的 body-parser
const bodyParser = require('body-parser')
// 注册 body-parser
app.use(bodyParser({ extended: false }))


// 注册路由
const router = require('./router.js')
app.use(router)


app.listen(5000, function () {
  console.log('http://127.0.0.1:5000');
});