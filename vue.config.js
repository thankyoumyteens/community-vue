const list = require('./list.json')
const detail = require('./detail.json')

module.exports = {
  devServer: {
    before (app) {
      app.get('/list', (req, res) => {
        setTimeout(() => {
          res.json({
            status: 0,
            data: list
          })
        }, 1000)
      })
      app.get('/detail', (req, res) => {
        setTimeout(() => {
          let id = req.query.id ? req.query.id : -1
          if (id >= 0) {
            res.json({
              status: 0,
              data: detail
            })
          } else {
            res.json({
              status: 1,
              msg: '参数错误'
            })
          }
        }, 1000)
      })
    }
  }
}
