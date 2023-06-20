const express = require('express')
const router = express.Router()
const {
    getblogs,
    createblog,
    findblog,
    updateblog,
    deleteblog
} = require('../controllers/BlogsController')
const validateToken = require("../middleware/validateTokenHandler")

router.use(validateToken);
router.route('/').get(getblogs).post(createblog);
router.route('/:id').get(findblog).put(updateblog).delete(deleteblog)

module.exports = router;