const model = require('./model.js')

module.exports = {
  registerNewUser(req, res) { // 注册用户
    // 分析业务逻辑：
    // 1. 获取提交过来的表单  body-parser
    // 2. 检测用户名是否被注册
    // 3. 如果用户名可用，则 调用 Model 模块 来添加数据到 数据库
    // 4. 如果用户名不可用，则 返回 结果 { status:1, msg: '用户已被注册，请更换其他用户名' }
    const user = req.body
    model.getUserByName(user.username, function (err, results) {
      if (err) return res.json({ status: 1, msg: '服务器错误！' })
      // 用户名可用
      if (results[0].count === 0) {
        model.register(user, (err, results) => {
          if (err) return res.json({ status: 1, msg: '注册失败' })

          res.json({ status: 0, msg: '恭喜，注册成功！' })
        })
      } else {
        res.json({ status: 1, msg: '用户名被占用了！' })
      }

    })
  }
}