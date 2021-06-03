const express = require('express')
const controller = require('../controller/member-controller')

const router = express.Router()

router.get('/', controller.MembergetAllData)
router.post('/', controller.MemberaddNewData)
router.put('/', controller.MemberupdateData)
router.delete('/:id', controller.MemberdeleteData)

module.exports = router
