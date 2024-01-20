const {Router} = require('express');
const authController = require('../controllers/controller')

const router = Router();

router.get('/updaterisk', authController.signup_post);
// router.get('/', authController.test_get)

module.exports = router;