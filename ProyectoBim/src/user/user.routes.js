'use strict'


import express from 'express'
import { 
    validateJwt,
} from '../middlewares/validate-jwt.js'
import {
    register, 
    login, 
    update, 
    deleteUser
} from './user.controller.js'

const api = express.Router()

api.put('/update/:id', [validateJwt], update)
api.delete('/delete/:id', [validateJwt], deleteUser)

api.post('/register', register)
api.post('/login', login)

export default api
