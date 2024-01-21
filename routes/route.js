const {Router} = require('express');
const authController = require('../controllers/controller')

const router = Router();

router.post('/updaterisk', authController.updaterisk);
router.get('/getrisk', authController.getrisk)

module.exports = router;