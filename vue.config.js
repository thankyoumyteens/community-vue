const list = require('./list.json')

module.exports = {
  devServer: {
    before (app) {
      app.get('/list', (req, res) => {
        setTimeout(() => {
          res.json(list)
        }, 1000)
      })
    }
  }
}
