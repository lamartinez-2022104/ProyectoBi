'use strict'

import { Router } from 'express'
import { deleteC, save, get, update } from './category.controller.js'

const api = Router()

api.post('/save', save)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteC)
api.get('/get', get)

export default api