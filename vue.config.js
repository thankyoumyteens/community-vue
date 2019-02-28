const list = require('./list.json')

module.exports = {
  devServer: {
    before (app) {
      app.get('/list', (req, res) => {
        res.json(list)
      })
    }
  }
}
