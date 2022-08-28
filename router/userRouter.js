const router = require('express').Router()
const {register,login} = require('../Controler/userControler')



// Registration Route
// localhost:4000/api/users/register
router.post('/register', register)

// Login Route
// localhost:4000/api/users/login
router.post('/login', login)


router.get('/all')

module.exports = router