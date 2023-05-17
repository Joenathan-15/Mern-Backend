const express = require('express')
const router = express.Router()
const {
    getcontacts,
    createcontacts,
    getsinglecontacts,
    updatecontacts,
    deletecontacts
} = require('../controllers/ContactsController')

router.route('/').get(getcontacts).post(createcontacts);
router.route('/:id').get(getsinglecontacts).put(updatecontacts).delete(deletecontacts)

module.exports = router;