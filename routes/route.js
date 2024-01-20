const {Router} = require('express');
const authController = require('../controllers/controller')

const router = Router();

router.post('/updaterisk', authController.signup_post);
// router.get('/', authController.test_get)

module.exports = router;