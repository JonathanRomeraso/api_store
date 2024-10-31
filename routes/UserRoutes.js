//const {User} = require('../models/User');

const express = require('express');
const router = express.Router();
//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');

const UserController = require('../controllers/userController')


//var guard = require('express-jwt-permissions')()
/*var guard = require('express-jwt-permissions')({
    requestProperty: 'auth',
    //permissionsProperty: 'scope'
  })*/
//, guard.check('user:read')

router.get(`/`, UserController.fetchUsers)

router.get('/:id', UserController.fetchOneUser)

router.post('/', UserController.createUser)

router.put('/:id',UserController.updateUser)

router.post('/login', UserController.login)

router.post('/register', UserController.register)

router.delete('/:id', UserController.remove)

router.get(`/get/count`, )


module.exports =router;