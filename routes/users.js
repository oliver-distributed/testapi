var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  const usersData = [
    {
      name: 'Michael Renzo Diaz',
      age: 26,
      email: 'mrenzodiaz@gmail.com',
    },
    {
      name: 'Kazel Jin Diaz',
      age: 30,
      email: 'kazeljinlorejo@gmail.com',
    },
  ]

  res.json({
    data: usersData,
  })
})

module.exports = router
