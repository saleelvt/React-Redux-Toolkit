const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.route('/create-user/')
  .post(userController.createUser);

router.route('/user-Login/')
 .post(userController.userLogin)

  
router.route('/users/')
.get(userController.listUser)

module.exports = router;

