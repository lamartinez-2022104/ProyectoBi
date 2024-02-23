'use strict'

import { Router } from 'express'
import { deleteAdmin, login, register, update } from './admin.controller.js'

const api = Router()

api.post('/register', register)
api.post('/login',login)
api.post('/update', update)
api.delete('/delete', deleteAdmin)

export default api