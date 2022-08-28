const router = require('express').Router()
const {getAll, create, update, getSingleTransaction, remove} = require('../Controler/transectionControler')
const authenticate = require('../authentication')


router.get('/', authenticate, getAll)

router.post('/', authenticate, create)

router.get('/:transactionId', authenticate, getSingleTransaction)

router.put('/:transactionId', authenticate, update)

router.delete('/:transactionId', authenticate, remove)

module.exports = router