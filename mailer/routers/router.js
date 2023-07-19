const router = require('express').Router();


const {signup, getbill} = require('../constroller/appController.js')

/**HTTp Request */
router.post('/user/signup', signup);
router.post('/product/getbill', getbill);


module.exports = router;